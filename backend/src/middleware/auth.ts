import type { Request, Response, NextFunction } from 'express';

import { verifyAccessToken } from '@fortune-funding/auth';


export interface AuthRequest extends Request {
  user?: {
    userId: string;
  };
}


export function authMiddleware(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): void {

  const authHeader = req.headers.authorization;


  if (!authHeader) {
    res.status(401).json({
      message: 'Authorization header missing',
    });
    return;
  }


  const parts = authHeader.split(' ');


  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    res.status(401).json({
      message: 'Invalid authorization format',
    });
    return;
  }


  const token = parts[1];


  try {

    const payload = verifyAccessToken(token);


    req.user = {
      userId: payload.userId,
    };


    next();
    return;

  } catch (error) {

    res.status(401).json({
      message: 'Invalid or expired token',
    });

    return;
  }
}