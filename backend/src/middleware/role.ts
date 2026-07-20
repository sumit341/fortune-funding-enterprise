import type {
  Request,
  Response,
  NextFunction,
} from 'express';


import {
  AuthorizationError,
} from '@fortune-funding/common';




export type UserRole =
  | 'user'
  | 'admin';





export interface RoleRequest
  extends Request {

  user?: {

    userId:string;

    role:UserRole;

  };

}





export function requireRole(
  ...roles:UserRole[]
) {


  return (

    req:RoleRequest,

    _res:Response,

    next:NextFunction

  ):void => {


    if(!req.user){


      throw new AuthorizationError(
        'Authentication required'
      );


    }




    if(
      !roles.includes(
        req.user.role
      )
    ){


      throw new AuthorizationError(
        'Insufficient permissions'
      );


    }



    next();


  };


}