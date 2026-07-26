import type {
  JwtPayload,
} from '../lib/jwt.js';

export interface AuthSession {
  user: JwtPayload;
  accessToken: string;
  refreshToken: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}