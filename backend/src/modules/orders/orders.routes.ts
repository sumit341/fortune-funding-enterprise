import {
  Router,
} from 'express';


import {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} from './orders.controller.js';



export const ordersRouter =
  Router();



ordersRouter.post(
  '/',
  createOrder
);



ordersRouter.get(
  '/',
  getOrders
);



ordersRouter.get(
  '/:id',
  getOrderById
);



ordersRouter.patch(
  '/:id',
  updateOrder
);



ordersRouter.delete(
  '/:id',
  deleteOrder
);