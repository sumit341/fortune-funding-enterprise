import { AppError } from './app-error.js';

export class BadRequestError extends AppError {
  constructor(
    message = 'Bad Request',
    details?: unknown
  ) {
    super(message, 400, 'BAD_REQUEST', details);
  }
}