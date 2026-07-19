import { HttpError } from './http-error.js';


export class AuthorizationError extends HttpError {

  constructor(
    message = 'Access denied'
  ) {

    super(
      message,
      403,
      'AUTHORIZATION_ERROR'
    );
  }
}