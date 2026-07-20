import { z } from 'zod';

import {
  createPaymentSchema,
} from './create-payment.dto.js';



export const updatePaymentSchema =
createPaymentSchema.partial();



export type UpdatePaymentDto =
z.infer<
  typeof updatePaymentSchema
>;