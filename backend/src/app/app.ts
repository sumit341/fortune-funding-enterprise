import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import cookieParser from 'cookie-parser';

import { healthRouter } from '../routes/health.js';
import { userRouter } from '../routes/user.js';
import { authRouter } from '../modules/auth/auth.routes.js';
import { errorHandler } from '../middleware/error-handler.js';


export function createApp() {
  const app = express();


  app.use(
    helmet()
  );


  app.use(
    cors({
      origin: true,
      credentials: true,
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
      extended: true,
    })
  );


  app.use(
    cookieParser()
  );


  app.get(
    '/',
    (_req, res) => {
      res.json({
        name: 'Fortune Funding API',
        status: 'running',
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
    userRouter
  );


  app.use(
    errorHandler
  );


  return app;
}