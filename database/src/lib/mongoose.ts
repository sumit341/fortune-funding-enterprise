import mongoose from 'mongoose';

export const mongooseInstance = mongoose;

export async function createMongoConnection(
  uri: string
): Promise<typeof mongoose> {
  if (mongoose.connection.readyState === 1) {
    return mongoose;
  }

  await mongoose.connect(uri, {
    serverSelectionTimeoutMS: 5000,
  });

  return mongoose;
}