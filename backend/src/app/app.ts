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



export function createApp(){

  const app =
    express();


  app.use(
    express.json()
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