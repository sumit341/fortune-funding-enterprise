import dotenv from 'dotenv';
import path from 'node:path';

import { envSchema } from './schema.js';
import type { AppConfig } from './types.js';


dotenv.config({
  path: path.resolve(
    process.cwd(),
    '.env'
  ),
});


const parsedEnv = envSchema.safeParse(
  process.env
);


if (!parsedEnv.success) {
  console.error(
    '❌ Invalid environment variables:',
    parsedEnv.error.flatten().fieldErrors
  );

  throw new Error(
    'Invalid environment configuration'
  );
}


const env = parsedEnv.data;


export const config: AppConfig = {
  nodeEnv: env.NODE_ENV,

  port: env.PORT,

  jwt: {
    secret: env.JWT_SECRET,
    refreshSecret: env.JWT_REFRESH_SECRET,
    expiresIn: env.JWT_EXPIRES_IN,
    refreshExpiresIn:
      env.JWT_REFRESH_EXPIRES_IN,
  },

  mongo: {
    uri: env.MONGO_URI,
  },

  redis: {
    url: env.REDIS_URL,
  },

  logger: {
    level: env.LOG_LEVEL,
  },
};


export { env };