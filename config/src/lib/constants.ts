export const APP_CONSTANTS = {
  pagination: {
    defaultPage: 1,
    defaultLimit: 20,
    maxLimit: 100,
  },

  jwt: {
    accessTokenCookie: 'access_token',
    refreshTokenCookie: 'refresh_token',
  },

  password: {
    minLength: 8,
  },

  rateLimit: {
    windowMs: 15 * 60 * 1000,
    maxRequests: 100,
  },

  api: {
    version: 'v1',
    prefix: '/api',
  },
} as const;