import { z } from 'zod';

export const createChallengeSchema =
  z.object({

    name: z
      .string()
      .trim()
      .min(3)
      .max(100),

    accountSize: z
      .number()
      .positive(),

    price: z
      .number()
      .positive(),

    profitTarget: z
      .number()
      .positive(),

    dailyLossLimit: z
      .number()
      .positive(),

    maxLossLimit: z
      .number()
      .positive(),

    leverage: z
      .number()
      .positive(),

    maxTradingDays: z
      .number()
      .int()
      .positive(),

    description: z
      .string()
      .trim()
      .max(1000)
      .optional(),

    isActive: z
      .boolean()
      .default(true),

  });

export type CreateChallengeDto =
  z.infer<
    typeof createChallengeSchema
  >;