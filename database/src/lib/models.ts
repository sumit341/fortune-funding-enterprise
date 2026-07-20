export interface BaseDocument {

  createdAt:Date;

  updatedAt:Date;

}



export * from './models/user.js';

export * from './models/refresh-token.js';

export * from './models/challenge.js';

export * from './models/order.js';

export * from './models/payment.js';