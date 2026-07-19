import { HttpError } from './http-error.js';


export class NotFoundError extends HttpError {

  constructor(
    message = 'Resource not found'
  ) {

    super(
      message,
      404,
      'NOT_FOUND'
    );
  }
}