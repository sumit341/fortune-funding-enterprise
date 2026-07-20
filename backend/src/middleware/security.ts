import type {
  Express,
} from 'express';

import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';

import rateLimit from 'express-rate-limit';
import slowDown from 'express-slow-down';

const rateLimiter = rateLimit({

  windowMs:
    15 * 60 * 1000,

  limit:
    100,

  standardHeaders:
    'draft-8',

  legacyHeaders:
    false,

  message: {

    success: false,

    message:
      'Too many requests. Please try again later.',

  },

});

const speedLimiter = slowDown({

  windowMs:
    15 * 60 * 1000,

  delayAfter:
    50,

  delayMs:
    () => 500,

});

export function applySecurity(
  app: Express
) {

  app.disable(
    'x-powered-by'
  );

  app.use(

    helmet({

      crossOriginEmbedderPolicy:
        false,

    })

  );

  app.use(

    compression()

  );

  app.use(

    cors({

      origin: [

        'http://localhost:4200',

        'http://localhost:5173',

      ],

      credentials:
        true,

    })

  );

  app.use(

    rateLimiter

  );

  app.use(

    speedLimiter

  );

}