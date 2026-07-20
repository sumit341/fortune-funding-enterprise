import { AppError } from '@fortune-funding/common';

export class UserNotFoundError extends AppError {
  constructor() {
    super(
      'User not found',
      404,
      'USER_NOT_FOUND'
    );
  }
}

export class EmailAlreadyExistsError extends AppError {
  constructor() {
    super(
      'Email already exists',
      409,
      'EMAIL_ALREADY_EXISTS'
    );
  }
}