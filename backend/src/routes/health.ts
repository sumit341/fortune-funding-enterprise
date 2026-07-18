import { Router } from 'express';

import { databaseHealth } from '@fortune-funding/database';


export const healthRouter = Router();


healthRouter.get('/', (_req, res) => {

  const database =
    databaseHealth();


  res.json({
    status: 'ok',
    service: 'fortune-funding-api',
    database,
  });

});