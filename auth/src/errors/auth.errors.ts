import { AppError } from '@fortune-funding/common';

export class InvalidCredentialsError extends AppError {
  constructor() {
    super(
      'Invalid email or password',
      401,
      'INVALID_CREDENTIALS'
    );
  }
}

export class UserAlreadyExistsError extends AppError {
  constructor() {
    super(
      'User already exists',
      409,
      'USER_ALREADY_EXISTS'
    );
  }
}

export class InvalidTokenError extends AppError {
  constructor() {
    super(
      'Invalid token',
      401,
      'INVALID_TOKEN'
    );
  }
}

export class TokenExpiredError extends AppError {
  constructor() {
    super(
      'Token expired',
      401,
      'TOKEN_EXPIRED'
    );
  }
}

export class UnauthorizedError extends AppError {
  constructor() {
    super(
      'Unauthorized',
      401,
      'UNAUTHORIZED'
    );
  }
}