import cors from 'cors';

import {
  securityConfig,
} from '../../config/security.js';

export const corsMiddleware =
  cors({
    origin:
      securityConfig.cors.origin,

    credentials:
      securityConfig.cors.credentials,
  });