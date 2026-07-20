import {
  createOrderSchema,
} from './create-order.dto.js';



export const updateOrderSchema =
  createOrderSchema
    .partial();



export type UpdateOrderDto =
  Partial<
    import('./create-order.dto.js')
      .CreateOrderDto
  >;