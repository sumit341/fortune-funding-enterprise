import {
  z,
} from 'zod';



export const createOrderSchema =
z.object({

  userId:
    z.string()
     .min(1),


  challengeId:
    z.string()
     .min(1),


  amount:
    z.number()
     .positive(),


  paymentMethod:
    z.string()
     .min(2),


  status:
    z.enum([

      'pending',

      'paid',

      'failed',

      'cancelled',

    ])
    .optional(),

});





export const updateOrderSchema =
createOrderSchema.partial();