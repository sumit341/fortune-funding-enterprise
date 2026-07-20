import express from 'express';

import {
  router,
} from '../routes/index.js';

import {
  errorHandler,
} from '../middleware/error-handler.js';

import {
  requestIdMiddleware,
} from '../middleware/request-id.js';

import {
  loggerMiddleware,
} from '../middleware/logger.js';

import {
  applySecurity,
} from '../middleware/security.js';

export function createApp(){

  const app =
    express();

  applySecurity(
    app
  );

  app.use(
    express.json({
      limit: '1mb',
    })
  );

  app.use(
    requestIdMiddleware
  );

  app.use(
    loggerMiddleware
  );

  app.use(
    '/api',
    router
  );

  app.use(
    errorHandler
  );

  return app;

}