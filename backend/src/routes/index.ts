import {
  Router,
} from 'express';

import {
  healthRouter,
} from './health.js';

import {
  authRouter,
} from '../modules/auth/auth.routes.js';

import {
  usersRouter,
} from '../modules/users/users.routes.js';

import {
  challengesRouter,
} from '../modules/challenges/challenges.routes.js';

import {
  ordersRouter,
} from '../modules/orders/orders.routes.js';

import {
  paymentsRouter,
} from '../modules/payments/payments.routes.js';

import {
  adminRouter,
} from '../modules/admin/admin.routes.js';

export const router =
  Router();

router.use(
  '/health',
  healthRouter
);

router.use(
  '/auth',
  authRouter
);

router.use(
  '/users',
  usersRouter
);

router.use(
  '/challenges',
  challengesRouter
);

router.use(
  '/orders',
  ordersRouter
);

router.use(
  '/payments',
  paymentsRouter
);

router.use(
  '/admin',
  adminRouter
);