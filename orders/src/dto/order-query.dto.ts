import { z } from 'zod';



export const orderQuerySchema =
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

        'paid',

        'failed',

        'cancelled',

      ])
      .optional(),



    sortBy:

      z.enum([

        'createdAt',

        'amount',

      ])
      .default(
        'createdAt'
      ),



    order:

      z.enum([

        'asc',

        'desc',

      ])
      .default(
        'desc'
      ),


  });



export type OrderQueryDto =
  z.infer<
    typeof orderQuerySchema
  >;