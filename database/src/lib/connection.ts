import {
  createMongoConnection,
  mongooseInstance,
} from './mongoose.js';

export async function connectDatabase(
  uri: string
) {
  try {
    await createMongoConnection(uri);

    console.log('✅ MongoDB connected');

    return mongooseInstance.connection;
  } catch (error) {
    console.error(
      '❌ MongoDB connection failed',
      error
    );

    throw error;
  }
}


export async function disconnectDatabase() {
  await mongooseInstance.disconnect();

  console.log('MongoDB disconnected');
}