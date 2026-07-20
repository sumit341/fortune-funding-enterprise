import { z } from 'zod';



export const paymentQuerySchema =
z.object({

  page:
    z.coerce
     .number()
     .int()
     .min(1)
     .default(1),


  limit:
    z.coerce
     .number()
     .int()
     .min(1)
     .max(100)
     .default(10),


  status:
    z.enum([

      'pending',
      'success',
      'failed',
      'refunded',

    ])
    .optional(),


  sortBy:
    z.enum([

      'amount',
      'createdAt',

    ])
    .default('createdAt'),


  order:
    z.enum([

      'asc',
      'desc',

    ])
    .default('desc'),

});


export type PaymentQueryDto =
z.infer<
 typeof paymentQuerySchema
>;