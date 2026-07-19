import type {
  Request,
  Response,
  NextFunction,
} from 'express';

import {
  AppError,
} from '@fortune-funding/common';

import {
  logger,
} from '@fortune-funding/logger';


export function errorHandler(
  error: unknown,
  req: Request,
  res: Response,
  _next: NextFunction
) {


  logger.error(
    {
      error,
      requestId:
        req.requestId,
    },
    'Request failed'
  );


  if(error instanceof AppError) {

    return res.status(
      error.statusCode
    ).json({

      success:false,

      error:{
        code:error.code,
        message:error.message,
        details:error.details,
      },

      requestId:
        req.requestId,
    });

  }


  return res.status(500).json({

    success:false,

    error:{
      code:'INTERNAL_ERROR',
      message:'Internal server error',
    },

    requestId:
      req.requestId,
  });
}