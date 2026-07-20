export const securityConfig = {
  cors: {
    origin:
      process.env.CORS_ORIGIN?.split(',') ??
      ['http://localhost:4200'],

    credentials: true,
  },

  rateLimit: {
    windowMs: 15 * 60 * 1000,
    max: 100,
  },

  slowDown: {
    windowMs: 15 * 60 * 1000,
    delayAfter: 50,
    delayMs: () => 500,
  },

  bodyLimit: '1mb',
};