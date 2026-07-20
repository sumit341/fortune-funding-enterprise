import { z } from 'zod';



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
      z.enum([

        'razorpay',

        'stripe',

        'manual',

      ]),


    status:
      z.enum([

        'pending',

        'paid',

        'failed',

        'cancelled',

      ])
      .default(
        'pending'
      ),


  });



export type CreateOrderDto =
  z.infer<
    typeof createOrderSchema
  >;