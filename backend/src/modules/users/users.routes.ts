import {
  Router,
} from 'express';


import {
  authMiddleware,
} from '../../middleware/auth.js';


import {
  getMe,
} from './users.controller.js';



export const usersRouter =
  Router();



usersRouter.get(
  '/me',
  authMiddleware,
  getMe
);