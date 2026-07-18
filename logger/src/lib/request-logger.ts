import { pinoHttp } from 'pino-http';

import { logger } from './logger.js';

export const requestLogger = pinoHttp({
  logger,

  customProps() {
    return {
      service: 'fortune-funding-api',
    };
  },

  autoLogging: true,
});