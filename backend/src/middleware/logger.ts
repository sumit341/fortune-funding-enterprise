import pinoHttp from 'pino-http';

import {
  logger,
} from '@fortune-funding/logger';


export const loggerMiddleware =
  pinoHttp({

    logger,

    customProps(req) {

      return {
        requestId:
          (req as any).requestId,
      };

    },

  });