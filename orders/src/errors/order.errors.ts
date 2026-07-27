import {
  AppError,
} from '@fortune-funding/common';

export class OrderNotFoundError
  extends AppError {

  constructor() {

    super(
      'Order not found',
      404,
      'ORDER_NOT_FOUND'
    );

  }

}

export class OrderAlreadyExistsError
  extends AppError {

  constructor() {

    super(
      'Order already exists',
      409,
      'ORDER_ALREADY_EXISTS'
    );

  }

}