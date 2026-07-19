import { HttpError } from './http-error.js';


export class ValidationError extends HttpError {

  constructor(
    message = 'Validation failed',
    details?: unknown
  ) {

    super(
      message,
      400,
      'VALIDATION_ERROR',
      details
    );
  }
}