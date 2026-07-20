import { z } from 'zod';

export const createUserSchema = z.object({
  name: z.string().min(2).max(50),

  email: z.string().email(),

  password: z.string().min(8).max(100),
});

export const updateUserSchema = z.object({
  name: z.string().min(2).max(50).optional(),

  email: z.string().email().optional(),

  password: z.string().min(8).max(100).optional(),

  isActive: z.boolean().optional(),
});

export const queryUsersSchema = z.object({
  page: z.coerce.number().min(1).default(1),

  limit: z.coerce.number().min(1).max(100).default(10),

  search: z.string().optional(),

  sort: z.string().optional(),
});