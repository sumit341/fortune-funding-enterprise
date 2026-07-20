import { z } from 'zod';

export const challengeQuerySchema =
  z.object({

    page: z
      .coerce
      .number()
      .int()
      .min(1)
      .default(1),

    limit: z
      .coerce
      .number()
      .int()
      .min(1)
      .max(100)
      .default(10),

    search: z
      .string()
      .trim()
      .optional(),

    sortBy: z
      .enum([
        'name',
        'price',
        'accountSize',
        'createdAt',
      ])
      .default('createdAt'),

    order: z
      .enum([
        'asc',
        'desc',
      ])
      .default('desc'),

  });

export type ChallengeQueryDto =
  z.infer<
    typeof challengeQuerySchema
  >;