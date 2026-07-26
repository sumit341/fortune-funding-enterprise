import { z } from 'zod';

import {
  ChallengeType,
} from '@fortune-funding/common';
export const createChallengeSchema = z.object({

  name: z.string().trim().min(2).max(100),

  type: z.nativeEnum(
    ChallengeType,
  ),

  accountSize: z.number().positive(),

  profitTarget: z.number().positive(),

  dailyLossLimit: z.number().positive(),

  maxLossLimit: z.number().positive(),

  leverage: z.number().positive(),

  minimumTradingDays: z.number().int().positive(),

  maximumTradingDays: z.number().int().positive(),

});

export type CreateChallengeDto =
  z.infer<
    typeof createChallengeSchema
  >;