import express from 'express';
import idx from 'idx';
import next from 'next';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import useragent from 'express-useragent';
import { post } from 'helpers';

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
  if (!token) {
    const sessionResponse = await post('/api/v1/auth', {
      username: 'larby@starlightgroup.io',
      password: 'P@ssw0rd',
    });
    if (idx(sessionResponse, _ => _.response.data)) {
      token = sessionResponse.response.data.data.token;
      res.cookie('ascbd_session', token, { httpOnly: true, maxAge: 36000 });
    }
  }
  return {
    id: token,
  };
};

const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
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
    return app.render(req, res, '/promo-desktop-thankyou', {
      orderId: req.query.orderId,
      sessionId,
    });
  });
  server.get('*', (req, res) => handle(req, res));
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on ${port}`);
  });
});
