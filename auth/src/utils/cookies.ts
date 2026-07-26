import type {
  Response,
} from 'express';

import {
  ACCESS_TOKEN_COOKIE,
  REFRESH_TOKEN_COOKIE,
} from '../constants/auth.constants.js';

const cookieOptions = {

  httpOnly: true,

  sameSite: 'strict' as const,

  secure:
    process.env.NODE_ENV === 'production',

};

export function setAccessTokenCookie(
  res: Response,
  token: string
): void {

  res.cookie(
    ACCESS_TOKEN_COOKIE,
    token,
    {
      ...cookieOptions,
      maxAge: 15 * 60 * 1000,
    }
  );

}

export function setRefreshTokenCookie(
  res: Response,
  token: string
): void {

  res.cookie(
    REFRESH_TOKEN_COOKIE,
    token,
    {
      ...cookieOptions,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    }
  );

}

export function clearAuthCookies(
  res: Response
): void {

  res.clearCookie(
    ACCESS_TOKEN_COOKIE
  );

  res.clearCookie(
    REFRESH_TOKEN_COOKIE
  );

}