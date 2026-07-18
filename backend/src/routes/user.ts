import { Router } from 'express';

import {
  authMiddleware,
  type AuthRequest,
} from '../middleware/auth.js';


export const userRouter = Router();


userRouter.get(
  '/me',
  authMiddleware,
  (
    req: AuthRequest,
    res
  ) => {

    res.json({
      message: 'Authenticated user',
      user: req.user,
    });

  }
);