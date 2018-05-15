// middleware for security
// Entry points, ip tampering, and so on
// it makes api return 403 error and sets `req.session.isBot` to true

import util from 'util';
import xss from 'xss';
import winston from 'winston';
import rangeCheck from 'range_check';
import config from '../server-config';

function getIp(req) {
  // https://support.cloudflare.com/hc/en-us/articles/200170986-How-does-CloudFlare-handle-HTTP-Request-headers-
  if (config.ENV !== 'development' && req.headers['cf-connecting-ip']) {
    return xss(req.headers['cf-connecting-ip']);
  }

  // http://stackoverflow.com/a/10849772/1885921
  if (req.headers['x-forwarded-for']) {
    return xss(req.headers['x-forwarded-for']);
  }
  return req.connection.remoteAddress;
}

function logBotAction(req, punishReason) {
  const ip = getIp(req);

  return winston.info('[SECURITY] bot punished %s - %s', ip, punishReason, {
    env: config.ENV,
    ip: getIp(req),
    buildId: config.buildId,
    method: req.method,
    entryPoint: req.session ? req.session.entryPoint : null,
    path: req.originalUrl,
    query: req.query,
    body: req.body,
    userAgent: req.get('User-Agent'),
    punishedBy: punishReason,
    type: util.format('security:botPunished:%s', punishReason),
    timestamp: new Date(),
  });
}

function punishForChangingIP(req, res, next) {
  if (req.session) {
    const rIp = getIp(req);
    if (req.session.ip !== rIp) {
      if (config.ENV !== 'production') {
        res.set('X-PUNISHEDBY', 'BAD_IP');
      }
      logBotAction(req, 'BAD_IP');
      req.session.isBot = true; // eslint-disable-line no-param-reassign
      return res.status(403).send('Invalid API Key');
    }
    return next();
  }
  return res.status(403).send('Invalid API Key');
}

function punishForChangingUserAgent(req, res, next) {
  if (req.session) {
    const ua = req.get('User-Agent');
    if (req.session.userAgent !== ua) {
      if (config.ENV !== 'production') {
        res.set('X-PUNISHEDBY', 'BAD_UA');
      }
      logBotAction(req, 'BAD_UA');
      req.session.isBot = true; // eslint-disable-line no-param-reassign
      return res.status(403).send('Invalid API Key');
    }
    return next();
  }
  return res.status(403).send('Invalid API Key');
}

export default {
  getIp,
  punishForChangingIP,
  punishForChangingUserAgent,
};
