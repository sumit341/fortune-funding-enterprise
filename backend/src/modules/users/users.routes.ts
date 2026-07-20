import {
  Router,
} from 'express';



import {
  authMiddleware,
} from '../../middleware/auth.js';



import {
  getCurrentUser,
} from './users.controller.js';



export const usersRouter =
  Router();



usersRouter.get(

  '/me',

  authMiddleware,

  getCurrentUser

);