import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import cookieParser from 'cookie-parser';


import {
  healthRouter,
} from '../routes/health.js';


import {
  usersRouter,
} from '../modules/users/users.routes.js';


import {
  authRouter,
} from '../modules/auth/auth.routes.js';


import {
  errorHandler,
} from '../middleware/error-handler.js';


import {
  requestIdMiddleware,
} from '../middleware/request-id.js';



export function createApp() {

  const app =
    express();



  app.use(
    requestIdMiddleware
  );


  app.use(
    helmet()
  );


  app.use(
    cors({

      origin:true,

      credentials:true,

    })
  );


  app.use(
    compression()
  );


  app.use(
    express.json()
  );


  app.use(
    express.urlencoded({

      extended:true,

    })
  );


  app.use(
    cookieParser()
  );



  app.get(
    '/',
    (_req,res)=>{

      res.json({

        name:
          'Fortune Funding API',

        status:
          'running',

      });

    }
  );



  app.use(
    '/health',
    healthRouter
  );



  app.use(
    '/api/auth',
    authRouter
  );



  app.use(
    '/api/users',
    usersRouter
  );



  app.use(
    errorHandler
  );



  return app;

}