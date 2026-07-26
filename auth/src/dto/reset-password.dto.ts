import { z } from 'zod';

export const resetPasswordSchema = z.object({
  token: z
    .string()
    .min(10),

  password: z
    .string()
    .min(8)
    .max(100),
});

export type ResetPasswordDto =
  z.infer<typeof resetPasswordSchema>;