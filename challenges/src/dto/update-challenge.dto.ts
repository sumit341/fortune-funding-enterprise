import {
  createChallengeSchema,
} from './create-challenge.dto.js';

export const updateChallengeSchema =
  createChallengeSchema.partial();

export type UpdateChallengeDto =
  Partial<
    import('./create-challenge.dto.js').CreateChallengeDto
  >;