import { z } from 'zod';

import { UserRole } from '@fortune-funding/common';

export const registerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2)
    .max(50),

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
});

export type RegisterDto =
  z.infer<typeof registerSchema>;