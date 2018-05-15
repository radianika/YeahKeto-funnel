import RedisClient from 'ioredis';
import winston from 'winston';

import config from './server-config';

const redisUrl = config.redis.REDIS_URL;
const redis = new RedisClient(redisUrl, {
  dropBufferSupport: true,
});
const { host, port } = redis.connector.options;

redis.on('connect', () => {
  winston.verbose('redis:connect', {
    host,
    port,
    type: 'redis:connect',
    env: config.ENV,
  });
});

redis.on('error', () => {
  winston.error('redis:error', {
    host,
    port,
    type: 'redis:error',
    env: config.ENV,
  });

  process.exit(1);
  // app requires the redis to run
  // failing to run redis will result in app crash
});

export default redis;
