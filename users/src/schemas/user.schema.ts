import { z } from 'zod';

export const updateUserSchema = z.object({
  name: z
    .string()
    .min(2)
    .max(50),
});

export type UpdateUserSchema =
  z.infer<typeof updateUserSchema>;