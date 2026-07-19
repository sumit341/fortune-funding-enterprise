import { HttpError } from './http-error.js';


export class ConflictError extends HttpError {

  constructor(
    message = 'Resource conflict'
  ) {

    super(
      message,
      409,
      'CONFLICT'
    );
  }
}