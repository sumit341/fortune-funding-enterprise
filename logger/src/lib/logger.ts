import pino from 'pino';

const isProduction =
  process.env.NODE_ENV === 'production';

export const logger = pino({
  level: process.env.LOG_LEVEL ?? 'info',

  transport: isProduction
    ? undefined
    : {
        target: 'pino-pretty',
        options: {
          colorize: true,
          translateTime: 'SYS:standard',
          ignore: 'pid,hostname',
        },
      },

  base: {
    service: 'fortune-funding-api',
  },

  timestamp: pino.stdTimeFunctions.isoTime,
});