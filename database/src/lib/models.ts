export interface BaseDocument {
  createdAt: Date;
  updatedAt: Date;
}


export * from './models/user.js';
export * from './models/refresh-token.js';