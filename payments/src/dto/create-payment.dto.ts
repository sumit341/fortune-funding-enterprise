import { z } from 'zod';


export const createPaymentSchema =
z.object({

  orderId:
    z.string()
     .min(1),


  userId:
    z.string()
     .min(1),


  amount:
    z.number()
     .positive(),


  paymentMethod:
    z.string()
     .min(2),


  transactionId:
    z.string()
     .optional(),


  status:
    z.enum([

      'pending',
      'success',
      'failed',
      'refunded',

    ])
    .default('pending'),

});


export type CreatePaymentDto =
z.infer<
  typeof createPaymentSchema
>;