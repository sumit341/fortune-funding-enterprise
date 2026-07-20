import helmet from 'helmet';

export const helmetMiddleware =
  helmet({
    crossOriginEmbedderPolicy: false,
  });