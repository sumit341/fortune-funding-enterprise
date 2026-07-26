import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email(),

  password: z
    .string()
    .min(8)
    .max(100),
});

export type LoginDto =
  z.infer<typeof loginSchema>;