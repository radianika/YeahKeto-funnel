import express from 'express';
import idx from 'idx';
import next from 'next';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import useragent from 'express-useragent';
import expressSession from 'express-session';
import connectRedis from 'connect-redis';
import querystring from 'querystring';
import { post } from './api-helpers';
import security from './middlewares/Security';
import rateLimiter from './middlewares/RateLimiter';
import config from './server-config';
import redis from './redis-config';

require('dotenv').config();

const { PORT, NODE_ENV } = process.env;

const dev = NODE_ENV !== 'production';

require('dotenv').config();

const port = PORT ? parseInt(PORT, 10) : 3000;

const server = express();

server.use(cookieParser());
server.use(useragent.express());
if (!dev) {
  server.use(compression());
}

const RedisSessionStore = connectRedis(expressSession);

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

server.use((req, res, cb) => {
  res.set('X-Powered-By', 'American Science CBD');
  res.set('X-XSS-Protection', 1);
  res.set('X-Frame-Options', 'SAMEORIGIN');
  res.set('Referrer-Policy', 'strict-origin');

  if (req.session) {
    res.set('ABCBDSESSID', req.sessionID);

    if (!req.session.ip) {
      req.session.ip = security.getIp(req); // eslint-disable-line no-param-reassign
    }

    if (!req.session.userAgent) {
      req.session.userAgent = req.get('User-Agent'); // eslint-disable-line no-param-reassign
    }
  }
  return cb();
});

const getSessionId = async (req, res) => {
  const { cookies } = req;
  let token = idx(cookies, _ => _.ascbd_session);
  if (!token || token === 'undefined') {
    const sessionResponse = await post('/v1/auth', {
      username: 'larby@starlightgroup.io',
      password: 'P@ssw0rd',
    });
    if (idx(sessionResponse, _ => _.response.data)) {
      token = sessionResponse.response.data.data.token;
      res.cookie('ascbd_session', token, { maxAge: 3600000 });
    }
  }
  return {
    id: token,
  };
};

const app = next({ dev });
const handle = app.getRequestHandler();

const redirectToPromo = (orderId, req, res) => {
  if (!orderId) {
    const requestAgent = req.useragent.isMobile ? 'mobile' : 'desktop';
    res.redirect(`/promo/${requestAgent}?${querystring.stringify(req.query)}`);
  }
};

app.prepare().then(() => {
  server.get('/cart', async (req, res) => {
    const sessionId = await getSessionId(req, res);
    return app.render(req, res, '/cart', { sessionId });
  });

  server.get('/thankyou?', async (req, res) => {
    const requestAgent = req.useragent.isMobile ? 'mobile' : 'desktop';
    const orderId = req.query.orderId;

    const sessionId = await getSessionId(req, res);
    return app.render(req, res, '/thankyou-page', {
      orderId,
      sessionId,
      device: requestAgent,
    });
  });

  server.get('/promo/:useragent?', async (req, res) => {
    const sessionId = await getSessionId(req, res);
    // console.log(sessionId)
    const requestAgent = req.useragent.isMobile ? 'mobile' : 'desktop';

    if (requestAgent !== req.params.useragent) {
      res.redirect(`/promo/${requestAgent}?${querystring.stringify(req.query)}`);
    }
    if (requestAgent === 'desktop') {
      return app.render(req, res, '/promo-desktop', { requestAgent, sessionId });
    }
    if (requestAgent === 'mobile') {
      return app.render(req, res, '/promo-mobile', { requestAgent, sessionId });
    }
  });

  server.get('/promo/desktop/checkout', async (req, res) => {
    const sessionId = await getSessionId(req, res);
    const orderId = req.query.orderId;
    redirectToPromo(orderId, req, res);
    return app.render(req, res, '/promo-desktop-checkout', {
      orderId,
      sessionId,
    });
  });

  server.get('/promo/desktop/upsell-1', async (req, res) => {
    const sessionId = await getSessionId(req, res);
    const orderId = req.query.orderId;
    redirectToPromo(orderId, req, res);
    return app.render(req, res, '/promo-desktop-upsell', {
      upsell: 1,
      orderId,
      sessionId,
    });
  });

  server.get('/promo/desktop/upsell-1-1', async (req, res) => {
    const sessionId = await getSessionId(req, res);
    const orderId = req.query.orderId;
    redirectToPromo(orderId, req, res);
    return app.render(req, res, '/promo-desktop-upsell', {
      upsell: '1-1',
      orderId,
      sessionId,
    });
  });

  server.get('/promo/desktop/upsell-2', async (req, res) => {
    const sessionId = await getSessionId(req, res);
    const orderId = req.query.orderId;
    redirectToPromo(orderId, req, res);
    return app.render(req, res, '/promo-desktop-upsell', {
      upsell: 2,
      orderId,
      sessionId,
    });
  });

  server.get('/promo/desktop/upsell-3', async (req, res) => {
    const sessionId = await getSessionId(req, res);
    const orderId = req.query.orderId;
    redirectToPromo(orderId, req, res);
    return app.render(req, res, '/promo-desktop-upsell', {
      upsell: 3,
      orderId,
      sessionId,
    });
  });

  server.get('/promo/desktop/thankyou', async (req, res) => {
    const sessionId = await getSessionId(req, res);
    const orderId = req.query.orderId;
    redirectToPromo(orderId, req, res);
    return app.render(req, res, '/thankyou-page', {
      orderId,
      sessionId,
      isPromo: true,
      device: 'desktop',
    });
  });

  server.get('/promo/mobile/shipping', async (req, res) => {
    const sessionId = await getSessionId(req, res);
    return app.render(req, res, '/promo-mobile-shipping', {
      sessionId,
    });
  });

  server.get('/promo/mobile/select-package', async (req, res) => {
    const sessionId = await getSessionId(req, res);
    const orderId = req.query.orderId;
    redirectToPromo(orderId, req, res);
    return app.render(req, res, '/promo-mobile-select-package', {
      sessionId,
      orderId,
    });
  });

  server.get('/promo/mobile/confirm', async (req, res) => {
    const sessionId = await getSessionId(req, res);
    const orderId = req.query.orderId;
    redirectToPromo(orderId, req, res);
    return app.render(req, res, '/promo-mobile-confirm', {
      sessionId,
      orderId,
      productId: req.query.productId,
    });
  });

  server.get('/promo/mobile/upsell-1', async (req, res) => {
    const sessionId = await getSessionId(req, res);
    const orderId = req.query.orderId;
    redirectToPromo(orderId, req, res);
    return app.render(req, res, '/promo-mobile-upsell', {
      upsell: 1,
      orderId,
      sessionId,
    });
  });

  server.get('/promo/mobile/upsell-1-1', async (req, res) => {
    const sessionId = await getSessionId(req, res);
    const orderId = req.query.orderId;
    redirectToPromo(orderId, req, res);
    return app.render(req, res, '/promo-mobile-upsell', {
      upsell: '1-1',
      orderId,
      sessionId,
    });
  });

  server.get('/promo/mobile/upsell-2', async (req, res) => {
    const sessionId = await getSessionId(req, res);
    const orderId = req.query.orderId;
    redirectToPromo(orderId, req, res);
    return app.render(req, res, '/promo-mobile-upsell', {
      upsell: 2,
      orderId,
      sessionId,
    });
  });

  server.get('/promo/mobile/upsell-3', async (req, res) => {
    const sessionId = await getSessionId(req, res);
    const orderId = req.query.orderId;
    redirectToPromo(orderId, req, res);
    return app.render(req, res, '/promo-mobile-upsell', {
      upsell: 3,
      orderId,
      sessionId,
    });
  });

  server.get('/promo/mobile/thankyou', async (req, res) => {
    const sessionId = await getSessionId(req, res);
    const orderId = req.query.orderId;
    redirectToPromo(orderId, req, res);
    return app.render(req, res, '/thankyou-page', {
      orderId,
      sessionId,
      isPromo: true,
      device: 'mobile',
    });
  });

  server.get('/hemp-oil', async (req, res) => {
    const sessionId = await getSessionId(req, res);
    return app.render(req, res, '/products', {
      sessionId,
      product: 'hemp-oil',
    });
  });

  server.get('/hemp-capsule', async (req, res) => {
    const sessionId = await getSessionId(req, res);
    return app.render(req, res, '/products', {
      sessionId,
      product: 'hemp-capsule',
    });
  });

  server.get('/warming_balm', async (req, res) => {
    const sessionId = await getSessionId(req, res);
    return app.render(req, res, '/products', {
      sessionId,
      product: 'warming_balm',
    });
  });

  server.get('*', (req, res) => handle(req, res));
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on ${port}`);
  });
});
