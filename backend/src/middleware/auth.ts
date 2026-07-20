import type {
  Request,
  Response,
  NextFunction,
} from 'express';


import {
  verifyAccessToken,
} from '@fortune-funding/auth';



export interface AuthRequest extends Request {

  user?: {

    userId:string;

    role:string;

  };

}



export function authMiddleware(

  req:Request,

  res:Response,

  next:NextFunction

):void {


  const authReq =
    req as AuthRequest;



  const authHeader =
    req.headers.authorization;



  if(!authHeader){

    res.status(401).json({

      message:
        'Authorization header missing',

    });

    return;

  }



  const parts =
    authHeader.split(' ');



  if(
    parts.length !== 2 ||
    parts[0] !== 'Bearer'
  ){

    res.status(401).json({

      message:
        'Invalid authorization format',

    });

    return;

  }



  const token =
    parts[1];



  try {


    const payload =
      verifyAccessToken(
        token
      );



    authReq.user = {

      userId:
        payload.userId,

      role:
        payload.role ?? 'user',

    };



    next();



  } catch(error){


    res.status(401).json({

      message:
        'Invalid or expired token',

    });


  }


}