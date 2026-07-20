import jwt from 'jsonwebtoken';

import {
  config,
} from '@fortune-funding/config';


import type {
  UserRole,
} from '@fortune-funding/common';


import type {
  SignOptions,
} from 'jsonwebtoken';



export interface JwtPayload {

  userId: string;

  role: UserRole;

}



const accessTokenOptions: SignOptions = {

  expiresIn:
    config.jwt.expiresIn as SignOptions['expiresIn'],

};



const refreshTokenOptions: SignOptions = {

  expiresIn:
    config.jwt.refreshExpiresIn as SignOptions['expiresIn'],

};




export function signAccessToken(
  payload: JwtPayload
): string {

  return jwt.sign(
    payload,
    config.jwt.secret,
    accessTokenOptions
  );

}




export function signRefreshToken(
  payload: JwtPayload
): string {

  return jwt.sign(
    payload,
    config.jwt.refreshSecret,
    refreshTokenOptions
  );

}




export function verifyAccessToken(
  token:string
):JwtPayload {

  return jwt.verify(
    token,
    config.jwt.secret
  ) as JwtPayload;

}




export function verifyRefreshToken(
  token:string
):JwtPayload {

  return jwt.verify(
    token,
    config.jwt.refreshSecret
  ) as JwtPayload;

}