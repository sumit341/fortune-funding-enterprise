import { z } from 'zod';

import {
  createChallengeSchema,
} from './create-challenge.dto.js';

export const updateChallengeSchema =
  createChallengeSchema
    .partial();

export type UpdateChallengeDto =
  z.infer<
    typeof updateChallengeSchema
  >;