import type {
  Request,
  Response,
  NextFunction,
} from 'express';


import {
  logger,
} from '@fortune-funding/logger';



export function loggerMiddleware(
  req: Request,
  _res: Response,
  next: NextFunction
): void {


  logger.info(
    {
      method: req.method,
      url: req.originalUrl,
    },
    'Incoming request'
  );


  next();

}