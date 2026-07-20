import {
  z,
} from 'zod';


export const createChallengeRequestSchema =
  z.object({

    name: z.string(),

    accountSize: z.number(),

    price: z.number(),

    profitTarget: z.number(),

    dailyLossLimit: z.number(),

    maxLossLimit: z.number(),

    leverage: z.number(),

    maxTradingDays: z.number(),

    description: z.string().optional(),

    isActive: z.boolean().optional(),

  });


export const updateChallengeRequestSchema =
  createChallengeRequestSchema
    .partial();