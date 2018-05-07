import express from 'express';
import idx from 'idx';
import next from 'next';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import useragent from 'express-useragent';
import { post } from './api-helpers';

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

const getSessionId = async (req, res) => {
  const { cookies } = req;
  let token = idx(cookies, _ => _.ascbd_session);
  const tokenType = typeof token;
  console.log({ token, tokenType });
  if (!token) {
    const sessionResponse = await post('/v1/auth', {
      username: 'larby@starlightgroup.io',
      password: 'P@ssw0rd',
    });
    console.log(idx(sessionResponse, _ => _.response.data));
    if (idx(sessionResponse, _ => _.response.data)) {
      token = sessionResponse.response.data.data.token;
      res.cookie('ascbd_session', token, { httpOnly: true });
    }
  }
  return {
    id: token,
  };
};

const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
  server.get('/cart', async (req, res) => {
    const sessionId = await getSessionId(req, res);
    return app.render(req, res, '/cart', { sessionId });
  });
  server.get('/thankyou?', async (req, res) => {
    const requestAgent = req.useragent.isMobile ? 'mobile' : 'desktop';
    if (requestAgent === 'desktop') {
      res.redirect(`/promo/desktop/thankyou?orderId=${req.query.orderId}`);
    }
    if (requestAgent === 'mobile') {
      res.redirect(`/promo/mobile/thankyou?orderId=${req.query.orderId}`);
    }
  });
  server.get('/promo/:useragent?', async (req, res) => {
    const sessionId = await getSessionId(req, res);
    // console.log(sessionId)
    const requestAgent = req.useragent.isMobile ? 'mobile' : 'desktop';
    if (requestAgent !== req.params.useragent) {
      res.redirect(`/promo/${requestAgent}`);
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
    return app.render(req, res, '/promo-desktop-checkout', {
      orderId: req.query.orderId,
      sessionId,
    });
  });
  server.get('/promo/desktop/upsell-1', async (req, res) => {
    const sessionId = await getSessionId(req, res);
    return app.render(req, res, '/promo-desktop-upsell', {
      upsell: 1,
      orderId: req.query.orderId,
      sessionId,
    });
  });
  server.get('/promo/desktop/upsell-2', async (req, res) => {
    const sessionId = await getSessionId(req, res);
    return app.render(req, res, '/promo-desktop-upsell', {
      upsell: 2,
      orderId: req.query.orderId,
      sessionId,
    });
  });
  server.get('/promo/desktop/upsell-3', async (req, res) => {
    const sessionId = await getSessionId(req, res);
    return app.render(req, res, '/promo-desktop-upsell', {
      upsell: 3,
      orderId: req.query.orderId,
      sessionId,
    });
  });
  server.get('/promo/desktop/thankyou', async (req, res) => {
    const sessionId = await getSessionId(req, res);
    return app.render(req, res, '/promo-thankyou', {
      orderId: req.query.orderId,
      sessionId,
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
    return app.render(req, res, '/promo-mobile-select-package', {
      sessionId,
      orderId: req.query.orderId,
    });
  });
  server.get('/promo/mobile/confirm', async (req, res) => {
    const sessionId = await getSessionId(req, res);
    return app.render(req, res, '/promo-mobile-confirm', {
      sessionId,
      orderId: req.query.orderId,
      productId: req.query.productId,
    });
  });
  server.get('/promo/mobile/upsell-1', async (req, res) => {
    const sessionId = await getSessionId(req, res);
    return app.render(req, res, '/promo-mobile-upsell', {
      upsell: 1,
      orderId: req.query.orderId,
      sessionId,
    });
  });
  server.get('/promo/mobile/upsell-2', async (req, res) => {
    const sessionId = await getSessionId(req, res);
    return app.render(req, res, '/promo-mobile-upsell', {
      upsell: 2,
      orderId: req.query.orderId,
      sessionId,
    });
  });
  server.get('/promo/mobile/upsell-3', async (req, res) => {
    const sessionId = await getSessionId(req, res);
    return app.render(req, res, '/promo-mobile-upsell', {
      upsell: 3,
      orderId: req.query.orderId,
      sessionId,
    });
  });
  server.get('/promo/mobile/thankyou', async (req, res) => {
    const sessionId = await getSessionId(req, res);
    return app.render(req, res, '/promo-thankyou', {
      orderId: req.query.orderId,
      sessionId,
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
