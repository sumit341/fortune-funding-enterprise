import type {
  Express,
} from 'express';

import {
  helmetMiddleware,
} from './helmet.js';

import {
  corsMiddleware,
} from './cors.js';

import {
  compressionMiddleware,
} from './compression.js';

import {
  rateLimitMiddleware,
  slowDownMiddleware,
} from './rate-limit.js';

export function applySecurity(
  app: Express
) {

  app.use(
    helmetMiddleware
  );

  app.use(
    corsMiddleware
  );

  app.use(
    compressionMiddleware
  );

  app.use(
    rateLimitMiddleware
  );

  app.use(
    slowDownMiddleware
  );

}