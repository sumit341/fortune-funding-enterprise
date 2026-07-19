import { HttpError } from './http-error.js';


export class AuthenticationError extends HttpError {

  constructor(
    message = 'Authentication failed'
  ) {

    super(
      message,
      401,
      'AUTHENTICATION_ERROR'
    );
  }
}