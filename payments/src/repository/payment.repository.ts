import {
  PaymentModel,
} from '@fortune-funding/database';

import type {
  Payment,
} from '@fortune-funding/database';

export class PaymentRepository {

  async create(
    data: Partial<Payment>
  ) {

    return PaymentModel.create(
      data
    );

  }

  async findById(
    id: string
  ) {

    return PaymentModel
      .findById(id)
      .exec();

  }

  async findMany(
    filter: Record<string, unknown> = {}
  ) {

    return PaymentModel
      .find(filter)
      .exec();

  }

  async update(
    id: string,
    data: Partial<Payment>
  ) {

    return PaymentModel
      .findByIdAndUpdate(
        id,
        data,
        {
          returnDocument: 'after',
        }
      )
      .exec();

  }

  async delete(
    id: string
  ) {

    return PaymentModel
      .findByIdAndDelete(id)
      .exec();

  }

  async count(
    filter: Record<string, unknown> = {}
  ) {

    return PaymentModel
      .countDocuments(filter)
      .exec();

  }

}

export const paymentRepository =
  new PaymentRepository();