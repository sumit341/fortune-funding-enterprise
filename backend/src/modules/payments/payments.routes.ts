import {
  Router,
} from 'express';


import {
  createPayment,
  getPayments,
  getPaymentById,
  updatePayment,
  deletePayment,
} from './payments.controller.js';



export const paymentsRouter =
  Router();



paymentsRouter.post(
  '/',
  createPayment
);



paymentsRouter.get(
  '/',
  getPayments
);



paymentsRouter.get(
  '/:id',
  getPaymentById
);



paymentsRouter.patch(
  '/:id',
  updatePayment
);



paymentsRouter.delete(
  '/:id',
  deletePayment
);