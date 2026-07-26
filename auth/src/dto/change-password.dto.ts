import { z } from 'zod';

export const changePasswordSchema = z.object({
  currentPassword: z
    .string()
    .min(8)
    .max(100),

  newPassword: z
    .string()
    .min(8)
    .max(100),
});

export type ChangePasswordDto =
  z.infer<typeof changePasswordSchema>;