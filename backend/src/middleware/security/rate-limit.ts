import rateLimit from 'express-rate-limit';

import slowDown from 'express-slow-down';

import {
  securityConfig,
} from '../../config/security.js';

export const rateLimitMiddleware =
  rateLimit({

    windowMs:
      securityConfig.rateLimit.windowMs,

    max:
      securityConfig.rateLimit.max,

    standardHeaders: true,

    legacyHeaders: false,

  });

export const slowDownMiddleware =
  slowDown({

    windowMs:
      securityConfig.slowDown.windowMs,

    delayAfter:
      securityConfig.slowDown.delayAfter,

    delayMs:
      securityConfig.slowDown.delayMs,

  });