import express from 'express';
import idx from 'idx';
import next from 'next';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import useragent from 'express-useragent';
import expressSession from 'express-session';
import connectRedis from 'connect-redis';
import querystring from 'querystring';
import Raven from 'raven';
import morgan from 'morgan';
import axios from 'axios';
import bodyParser from 'body-parser';
import {
  post,
  postToAbtasty,
  generateAbtastyVisitorId,
  getVariationForVisitor,
  postToAbtastyMultiple,
  asyncGetVariationForVisitor,
} from './api-helpers';
import security from './middlewares/Security';
import rateLimiter from './middlewares/RateLimiter';
import config from './server-config';
import redis from './redis-config';

require('dotenv').config();

const {
  PORT,
  NODE_ENV,
  API_BASE_URL,
  ABTASTY_BASE_URL,
  ABTASTY_API_KEY,
} = process.env;

const dev = NODE_ENV !== 'production';

require('dotenv').config();

const port = PORT ? parseInt(PORT, 10) : 3000;

const server = express();

// Express Middlewares

// for logging express req and res
server.use(
  morgan('combined', {
    skip(req, res) {
      return res.statusCode < 400;
    },
  }),
);

server.use(cookieParser());
server.use(bodyParser.json());
server.use(useragent.express());

// configure remote logging
if (!dev) {
  Raven.config('https://30b971029d594608bb765ea6e46298f0@sentry.io/1207214', {
    maxBreadcrumbs: 10,
    sendTimeout: 5,
  }).install();
  server.use(compression());
}

const RedisSessionStore = connectRedis(expressSession);

// initialize redis store to be used by Ratelimiter
server.use(
  expressSession({
    key: 'ABCBDSESSID',
    store: new RedisSessionStore({
      prefix: 'starlight_session_',
      client: redis,
    }),
    expireAfterSeconds: 3 * 60 * 60, // session is valid for 3 hours
    secret: config.secret,
    httpOnly: true,
    resave: true,
    saveUninitialized: true,
    cookie: {
      secure: false,
    },
  }),
);

server.use('/*', rateLimiter);

// Security.js for protecting agains xss attacks
server.use((req, res, cb) => {
  res.set('X-Powered-By', 'American Science CBD');
  res.set('X-XSS-Protection', 1);
  res.set('X-Frame-Options', 'SAMEORIGIN');
  res.set('Referrer-Policy', 'strict-origin');
  try {
    if (req.session) {
      // set key only for page requests
      // ignore for static calls and HMR calls in dev
      if (
        req.url.indexOf('/static/') === -1 &&
        req.url.indexOf('on-demand-entries-ping') === -1
      ) {
        res.set('ABCBDSESSID', req.sessionID);
      }

      if (req.session && !req.session.ip) {
        req.session.ip = security.getIp(req); // eslint-disable-line no-param-reassign
      }

      if (req.session && !req.session.userAgent) {
        req.session.userAgent = req.get('User-Agent'); // eslint-disable-line no-param-reassign
      }
    }
  } catch (error) {
    Raven.captureException(error);
    console.error('Exception Occurred in ReactApp', error.stack || error);
  }
  return cb();
});

/**
 * get sessionId from cookies
 * @param  {} req
 * @param  {} res
 * @return {Object} id : token
 */
const getSessionId = async (req, res) => {
  try {
    const { cookies } = req;
    const token = idx(cookies, _ => _.ascbd_session);
    if (!token || token === 'undefined') {
      res.redirect('/promo');
    }
    return {
      id: token,
    };
  } catch (error) {
    Raven.captureException(error);
    console.error('Exception Occurred in ReactApp', error.stack || error);
  }
};

const getVisitorId = async (req, res) => {
  try {
    const { cookies } = req;
    let visitorId = idx(cookies, _ => _.asc_visitor_id);
    if (visitorId && visitorId !== 'undefined') {
      return { visitorId, isNew: false };
    }
    visitorId = await generateAbtastyVisitorId();
    return { visitorId, isNew: true };
  } catch (error) {
    Raven.captureException(error);
    console.error('Exception Occurred in ReactApp', error.stack || error);
  }
};

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  server.post('/abtasty', async (req, res) => {
    const response = await postToAbtasty(req.body.action, req.body);
    console.log({ response });
    res.status(200).send(response);
  });

  server.post('/multicampaign-abtasty', async (req, res) => {
    const campaigns = req.body;
    const promises = [];

    Object.keys(campaigns).forEach(key => {
      const response = postToAbtastyMultiple(
        campaigns[key].action,
        campaigns[key],
      );
      promises.push(response);
    });

    Promise.all(promises)
      .then(values => {
        console.log(values);
        res.status(200).send('success');
      })
      .catch(reason => {
        console.log(reason);
        res.status(500).send('error');
      });
  });

  server.get('/start-session', async (req, res) => {
    const sessionResponse = await post(
      '/v1/auth',
      {
        username: 'larby@starlightgroup.io',
        password: 'P@ssw0rd',
      },
      {
        'x-ascbd-req-origin': req.get('host'),
      },
    );
    if (idx(sessionResponse, _ => _.response.data)) {
      // eslint-disable-next-line
      const token = sessionResponse.response.data.data.token;
      res.cookie('ascbd_session', token, { maxAge: 3600000 });
      res.status(200).send({ token });
    }
  });
  server.get('/cart', async (req, res) => app.render(req, res, '/cart'));

  server.get('/thankyou?', async (req, res) => {
    try {
      const requestAgent = req.useragent.isMobile ? 'mobile' : 'desktop';
      const { orderId } = req.query;

      const sessionId = await getSessionId(req, res);
      return app.render(req, res, '/thankyou-page', {
        orderId,
        sessionId,
        device: requestAgent,
      });
    } catch (error) {
      Raven.captureException(error);
      console.error('Exception Occurred in ReactApp', error.stack || error);
    }
  });

  server.get('/promo/:useragent?', async (req, res) => {
    try {
      const requestAgent = req.useragent.isMobile ? 'mobile' : 'desktop';
      const { visitorId, isNew } = await getVisitorId(req, res);

      if (isNew) {
        res.cookie('asc_visitor_id', visitorId, { maxAge: 3600000 });
      }

      if (requestAgent !== req.params.useragent) {
        res.redirect(
          `/promo/${requestAgent}?${querystring.stringify(req.query)}`,
        );
      }
      if (requestAgent === 'desktop') {
        const variationId = await getVariationForVisitor(visitorId, '312492');
        const tests = ['313763', '314234'];
        const promisses = [];
        const campaigns = {};

        tests.forEach((test, index) => {
          console.log(test);
          campaigns[index] = test;
          promisses.push(asyncGetVariationForVisitor(visitorId, test));
        });

        Promise.all(promisses)
          .then(values => {
            console.log({ values });
            const campaignMaps = {};
            values.forEach((value, index) => {
              if (idx(value, _ => _.data.variation_id)) {
                campaignMaps[campaigns[index]] = value.data.variation_id;
              }
            });

            app.render(req, res, '/promo-desktop', {
              requestAgent,
              visitorId,
              variationId,
              device: requestAgent,
              campaignMaps,
            });
          })
          .catch(err => {
            app.render(req, res, '/promo-desktop', {
              requestAgent,
              visitorId,
              variationId,
              device: requestAgent,
              campaignMaps: { 313763: '413271' },
            });
          });
      }
      if (requestAgent === 'mobile') {
        const variationId = await getVariationForVisitor(visitorId, '312494');
        const tests = ['313876', '314235'];
        const promisses = [];
        const campaigns = {};

        tests.forEach((test, index) => {
          console.log(test);
          campaigns[index] = test;
          promisses.push(asyncGetVariationForVisitor(visitorId, test));
        });

        Promise.all(promisses)
          .then(values => {
            console.log(values);
            const campaignMaps = {};
            values.forEach((value, index) => {
              if (idx(value, _ => _.data.variation_id)) {
                campaignMaps[campaigns[index]] = value.data.variation_id;
              }
            });

            app.render(req, res, '/promo-mobile', {
              requestAgent,
              visitorId,
              variationId,
              device: requestAgent,
              campaignMaps,
            });
          })
          .catch(err => {
            app.render(req, res, '/promo-mobile', {
              requestAgent,
              visitorId,
              variationId,
              device: requestAgent,
              campaignMaps: { 313876: '413418' },
            });
          });
      }
    } catch (error) {
      Raven.captureException(error);
      console.error('Exception Occurred in ReactApp', error.stack || error);
    }
  });

  server.get('/promo/desktop/checkout', async (req, res) => {
    try {
      const sessionId = await getSessionId(req, res);
      const { orderId } = req.query;
      const { visitorId, isNew } = await getVisitorId(req, res);
      const variationId = await getVariationForVisitor(visitorId, '313018');
      const offerId = req.query.offer_id;
      const transaction_id = req.query.transaction_id;
      const adv_sub = req.query.aff_sub2;

      // redirectToPromo(orderId, req, res, () => {
      app.render(req, res, '/promo-desktop-checkout', {
        orderId,
        sessionId,
        visitorId,
        variationId,
        adv_sub,
        transaction_id,
        offerId,
      });
      // });
    } catch (error) {
      Raven.captureException(error);
      console.error('Exception Occurred in ReactApp', error.stack || error);
    }
  });

  server.get('/promo/desktop/upsell-1', async (req, res) => {
    try {
      const sessionId = await getSessionId(req, res);
      const { orderId } = req.query;
      const offerId = req.query.sourceValue5;
      const transaction_id = req.query.sourceValue3;
      const adv_sub = req.query.sourceValue2;
      // redirectToPromo(orderId, req, res, () => {
      app.render(req, res, '/promo-desktop-upsell', {
        upsell: 1,
        orderId,
        offerId,
        transaction_id,
        adv_sub,
        sessionId,
      });
      // });
    } catch (error) {
      Raven.captureException(error);
      console.error('Exception Occurred in ReactApp', error.stack || error);
    }
  });

  server.get('/promo/desktop/upsell-1-1', async (req, res) => {
    try {
      const sessionId = await getSessionId(req, res);
      const { orderId } = req.query;
      const offerId = req.query.sourceValue5;
      const transaction_id = req.query.sourceValue3;
      const adv_sub = req.query.sourceValue2;

      // redirectToPromo(orderId, req, res, () => {
      app.render(req, res, '/promo-desktop-upsell', {
        upsell: '1-1',
        orderId,
        offerId,
        transaction_id,
        adv_sub,
        sessionId,
      });
      // });
    } catch (error) {
      Raven.captureException(error);
      console.error('Exception Occurred in ReactApp', error.stack || error);
    }
  });

  server.get('/promo/desktop/upsell-2', async (req, res) => {
    try {
      const sessionId = await getSessionId(req, res);
      const { orderId } = req.query;
      const offerId = req.query.sourceValue5;
      const transaction_id = req.query.sourceValue3;
      const adv_sub = req.query.sourceValue2;

      // redirectToPromo(orderId, req, res, () => {
      app.render(req, res, '/promo-desktop-upsell', {
        upsell: 2,
        orderId,
        offerId,
        transaction_id,
        adv_sub,
        sessionId,
      });
      // });
    } catch (error) {
      Raven.captureException(error);
      console.error('Exception Occurred in ReactApp', error.stack || error);
    }
  });

  server.get('/promo/desktop/thankyou', async (req, res) => {
    try {
      const sessionId = await getSessionId(req, res);
      const { orderId } = req.query;
      // redirectToPromo(orderId, req, res, () => {
      app.render(req, res, '/thankyou-page', {
        orderId,
        sessionId,
        isPromo: true,
        device: 'desktop',
      });
      // });
    } catch (error) {
      Raven.captureException(error);
      console.error('Exception Occurred in ReactApp', error.stack || error);
    }
  });

  server.get('/promo/mobile/shipping', async (req, res) => {
    try {
      const sessionId = await getSessionId(req, res);
      // const { visitorId } = await getVisitorId(req, res);
      // const variationId = await getVariationForVisitor(visitorId, '312844');

      return app.render(req, res, '/promo-mobile-shipping', {
        sessionId,
      });
    } catch (error) {
      Raven.captureException(error);
      console.error('Exception Occurred in ReactApp', error.stack || error);
    }
  });

  server.get('/promo/mobile/select-package', async (req, res) => {
    try {
      const sessionId = await getSessionId(req, res);
      const { orderId } = req.query;
      // redirectToPromo(orderId, req, res, () => {
      app.render(req, res, '/promo-mobile-select-package', {
        sessionId,
        orderId,
      });
      // });
    } catch (error) {
      Raven.captureException(error);
      console.error('Exception Occurred in ReactApp', error.stack || error);
    }
  });

  server.get('/promo/mobile/confirm', async (req, res) => {
    try {
      const sessionId = await getSessionId(req, res);
      const { orderId } = req.query;
      const offerId = req.query.offer_id;
      const transaction_id = req.query.transaction_id;
      const adv_sub = req.query.aff_sub2;
      // redirectToPromo(orderId, req, res, () => {
      app.render(req, res, '/promo-mobile-confirm', {
        sessionId,
        orderId,
        productId: req.query.productId,
        offerId,
        transaction_id,
        adv_sub,
      });
      // });
    } catch (error) {
      Raven.captureException(error);
      console.error('Exception Occurred in ReactApp', error.stack || error);
    }
  });

  server.get('/promo/mobile/upsell-1', async (req, res) => {
    try {
      const sessionId = await getSessionId(req, res);
      const { orderId } = req.query;
      const offerId = req.query.sourceValue5;
      const transaction_id = req.query.sourceValue3;
      const adv_sub = req.query.sourceValue2;
      const { visitorId } = await getVisitorId(req, res);
      const campaignId = '308072';
      const variationId = await getVariationForVisitor(visitorId, campaignId);
      console.log({ variationId, visitorId });

      app.render(req, res, '/promo-mobile-upsell', {
        upsell: 1,
        offerId,
        orderId,
        transaction_id,
        adv_sub,
        sessionId,
        variationId,
        campaignId,
        visitorId,
      });
    } catch (error) {
      Raven.captureException(error);
      console.error('Exception Occurred in ReactApp', error.stack || error);
    }
  });

  server.get('/promo/mobile/upsell-1-1', async (req, res) => {
    try {
      const sessionId = await getSessionId(req, res);
      const { orderId } = req.query;
      const transaction_id = req.query.sourceValue3;
      const adv_sub = req.query.sourceValue2;

      const { visitorId } = await getVisitorId(req, res);
      const campaignId = '308073';
      const variationId = await getVariationForVisitor(visitorId, campaignId);

      app.render(req, res, '/promo-mobile-upsell', {
        upsell: '1-1',
        orderId,
        campaignId: '308073',
        visitorId,
        variationId,
        transaction_id,
        adv_sub,
        sessionId,
      });
    } catch (error) {
      Raven.captureException(error);
      console.error('Exception Occurred in ReactApp', error.stack || error);
    }
  });

  server.get('/promo/mobile/upsell-2', async (req, res) => {
    try {
      const sessionId = await getSessionId(req, res);
      const { orderId } = req.query;
      const offerId = req.query.sourceValue5;
      const transaction_id = req.query.sourceValue3;
      const adv_sub = req.query.sourceValue2;

      const { visitorId } = await getVisitorId(req, res);
      const campaignId = '308075';
      const { prev } = req.query;
      let variationId = '';
      if (prev !== 'upsell11') {
        variationId = await getVariationForVisitor(visitorId, campaignId);
      }
      console.log({ variationId, campaignId });

      app.render(req, res, '/promo-mobile-upsell', {
        upsell: 2,
        orderId,
        offerId,
        visitorId,
        campaignId,
        prev,
        variationId,
        transaction_id,
        adv_sub,
        sessionId,
      });
    } catch (error) {
      Raven.captureException(error);
      console.error('Exception Occurred in ReactApp', error.stack || error);
    }
  });

  server.get('/promo/desktop/upsell-2-1', async (req, res) => {
    try {
      const sessionId = await getSessionId(req, res);
      const { orderId } = req.query;
      const offerId = req.query.sourceValue5;
      const transaction_id = req.query.sourceValue3;
      const adv_sub = req.query.sourceValue2;

      // redirectToPromo(orderId, req, res, () => {
      app.render(req, res, '/promo-desktop-upsell', {
        upsell: '2-1',
        orderId,
        offerId,
        transaction_id,
        adv_sub,
        sessionId,
      });
      // });
    } catch (error) {
      Raven.captureException(error);
      console.error('Exception Occurred in ReactApp', error.stack || error);
    }
  });

  server.get('/promo/mobile/upsell-2-1', async (req, res) => {
    try {
      const sessionId = await getSessionId(req, res);
      const { orderId } = req.query;
      const offerId = req.query.sourceValue5;
      const transaction_id = req.query.sourceValue3;
      const adv_sub = req.query.sourceValue2;

      const { visitorId } = await getVisitorId(req, res);
      const campaignId = '308075';
      const variationId = await getVariationForVisitor(visitorId, campaignId);
      console.log({ variationId, campaignId });

      // redirectToPromo(orderId, req, res, () => {
      app.render(req, res, '/promo-mobile-upsell', {
        upsell: '2-1',
        orderId,
        offerId,
        visitorId,
        campaignId,
        variationId,
        transaction_id,
        adv_sub,
        sessionId,
      });
      // });
    } catch (error) {
      Raven.captureException(error);
      console.error('Exception Occurred in ReactApp', error.stack || error);
    }
  });

  server.get('/promo/mobile/thankyou', async (req, res) => {
    try {
      const sessionId = await getSessionId(req, res);
      const { orderId } = req.query;
      // redirectToPromo(orderId, req, res, () => {
      app.render(req, res, '/thankyou-page', {
        orderId,
        sessionId,
        isPromo: true,
        device: 'mobile',
      });
      // });
    } catch (error) {
      Raven.captureException(error);
      console.error('Exception Occurred in ReactApp', error.stack || error);
    }
  });

  server.get('/promo/:useragent/*', async (req, res) => {
    try {
      const requestAgent = req.useragent.isMobile ? 'mobile' : 'desktop';
      res.redirect(`/promo/${requestAgent}`);
    } catch (error) {
      Raven.captureException(error);
      console.error('Exception Occurred in ReactApp', error.stack || error);
    }
  });

  server.get('/hemp-oil', async (req, res) => {
    try {
      return app.render(req, res, '/products', {
        product: 'hemp-oil',
      });
    } catch (error) {
      Raven.captureException(error);
      console.error('Exception Occurred in ReactApp', error.stack || error);
    }
  });

  server.get('/hemp-capsule', async (req, res) => {
    try {
      return app.render(req, res, '/products', {
        product: 'hemp-capsule',
      });
    } catch (error) {
      Raven.captureException(error);
      console.error('Exception Occurred in ReactApp', error.stack || error);
    }
  });

  server.get('/warming_balm', async (req, res) => {
    try {
      return app.render(req, res, '/products', {
        product: 'warming_balm',
      });
    } catch (error) {
      Raven.captureException(error);
      console.error('Exception Occurred in ReactApp', error.stack || error);
    }
  });

  server.get('*', (req, res) => {
    try {
      const permittedRoutes = ['/', '/faqs', '/contact', '/products'];
      if (
        req.url.indexOf('/static/') === -1 &&
        req.url.indexOf('on-demand-entries-ping') === -1 &&
        req.url.indexOf('_next') === -1 &&
        !permittedRoutes.includes(req.url)
      ) {
        res.redirect('/promo');
      }
      return handle(req, res);
    } catch (error) {
      Raven.captureException(error);
      console.error('Exception Occurred in ReactApp', error.stack || error);
    }
  });
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on ${port}`);
  });
});
