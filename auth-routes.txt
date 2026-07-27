import {
  Router,
} from 'express';


import {
  registerController,
  loginController,
  refreshController,
  logoutController,
} from './auth.controller.js';



export const authRouter =
  Router();





authRouter.post(
  '/register',
  registerController
);





authRouter.post(
  '/login',
  loginController
);





authRouter.post(
  '/refresh',
  refreshController
);





authRouter.post(
  '/logout',
  logoutController
);