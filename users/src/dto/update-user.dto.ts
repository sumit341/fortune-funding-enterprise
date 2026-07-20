import { z } from 'zod';

export const updateUserSchema =
  z.object({

    name: z
      .string()
      .trim()
      .min(2)
      .max(100)
      .optional(),

    email: z
      .string()
      .trim()
      .email()
      .optional(),

    password: z
      .string()
      .min(8)
      .max(100)
      .optional(),

    role: z
      .enum([
        'user',
        'admin',
      ])
      .optional(),

    isActive: z
      .boolean()
      .optional(),

  });

export type UpdateUserDto =
  z.infer<typeof updateUserSchema>;