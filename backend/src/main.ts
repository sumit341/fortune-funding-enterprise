import { createApp } from './app/app.js';

import { config } from '@fortune-funding/config';
import { logger } from '@fortune-funding/logger';
import { connectDatabase } from '@fortune-funding/database';

async function bootstrap() {
  try {
    await connectDatabase(config.mongo.uri);

    const app = createApp();

    app.listen(config.port, () => {
      logger.info(
        `API running on port ${config.port}`
      );
    });

  } catch (error) {
    logger.error(
      { error },
      'Failed to start server'
    );

    process.exit(1);
  }
}

bootstrap();