import {
  paymentRepository,
} from '../repository/index.js';

import {
  mapPayment,
} from '../mapper/index.js';

import type {
  CreatePaymentDto,
  UpdatePaymentDto,
  PaymentQueryDto,
} from '../dto/index.js';

import {
  PaymentNotFoundError,
} from '../errors/index.js';

export class PaymentService {

  async create(
    data: CreatePaymentDto
  ) {

    const payment =
      await paymentRepository.create(
        data
      );

    return mapPayment(
      payment
    );

  }

  async findById(
    id: string
  ) {

    const payment =
      await paymentRepository.findById(
        id
      );

    if (!payment) {

      throw new PaymentNotFoundError();

    }

    return mapPayment(
      payment
    );

  }

  async list(
    query: PaymentQueryDto
  ) {

    const {
      page,
      limit,
      status,
    } = query;

    const filter: Record<string, unknown> = {};

    if (status) {

      filter.status = status;

    }

    const payments =
      await paymentRepository.findMany(
        filter
      );

    const total =
      await paymentRepository.count(
        filter
      );

    return {

      data:
        payments.map(
          mapPayment
        ),

      meta: {

        page,

        limit,

        total,

        pages:
          Math.ceil(
            total / limit
          ),

      },

    };

  }

  async update(
    id: string,
    data: UpdatePaymentDto
  ) {

    const payment =
      await paymentRepository.update(
        id,
        data
      );

    if (!payment) {

      throw new PaymentNotFoundError();

    }

    return mapPayment(
      payment
    );

  }

  async delete(
    id: string
  ) {

    const payment =
      await paymentRepository.delete(
        id
      );

    if (!payment) {

      throw new PaymentNotFoundError();

    }

    return {

      success: true,

    };

  }

}

export const paymentService =
  new PaymentService();