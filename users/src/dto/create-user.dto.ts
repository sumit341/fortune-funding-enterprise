import { z } from 'zod';

import {
  UserRole,
} from '@fortune-funding/common';

export const createUserSchema = z.object({

  name: z
    .string()
    .trim()
    .min(2)
    .max(100),

  email: z
    .string()
    .trim()
    .email(),

  password: z
    .string()
    .min(8)
    .max(100),

  role: z
    .nativeEnum(UserRole)
    .default(UserRole.USER),

  isActive: z
    .boolean()
    .default(true),

});

export type CreateUserDto =
  z.infer<
    typeof createUserSchema
  >;