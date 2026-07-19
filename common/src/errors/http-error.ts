import { AppError } from './app-error.js';


export class HttpError extends AppError {

  constructor(
    message: string,
    statusCode: number,
    code: string,
    details?: unknown
  ) {
    super(
      message,
      statusCode,
      code,
      details
    );
  }
}