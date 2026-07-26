import { z } from 'zod';

export const challengeQuerySchema =
  z.object({

    page:
      z.coerce
        .number()
        .default(1),

    limit:
      z.coerce
        .number()
        .default(20),

    search:
      z
        .string()
        .optional(),

    sortBy:
      z
        .enum([
          'createdAt',
          'updatedAt',
          'name',
          'price',
          'accountSize',
        ])
        .default('createdAt'),

    order:
      z
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