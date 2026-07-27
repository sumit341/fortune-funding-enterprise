import {
  OrderModel,
} from '@fortune-funding/database';

import type {
  Order,
} from '@fortune-funding/database';

import type {
  OrderQueryDto,
} from '../dto/index.js';

export class OrderRepository {

  async create(
    data: Partial<Order>
  ) {

    return OrderModel.create(
      data
    );

  }

  async findById(
    id: string
  ) {

    return OrderModel
      .findById(id)
      .exec();

  }

  async findMany(
    query: OrderQueryDto
  ) {

    const filter:
      Record<string, unknown> = {};

    if (query.status) {

      filter.status =
        query.status;

    }

    return OrderModel.find(
      filter
    )

    .sort({

      [query.sortBy]:
        query.order === 'asc'
          ? 1
          : -1,

    })

    .skip(

      (query.page - 1)
      *
      query.limit

    )

    .limit(
      query.limit
    )

    .exec();

  }

  async count(
    query: OrderQueryDto
  ) {

    const filter:
      Record<string, unknown> = {};

    if (query.status) {

      filter.status =
        query.status;

    }

    return OrderModel
      .countDocuments(filter)
      .exec();

  }

  async update(
    id: string,
    data: Partial<Order>
  ) {

    return OrderModel
      .findByIdAndUpdate(
        id,
        data,
        {
          new: true,
        }
      )
      .exec();

  }

  async delete(
    id: string
  ) {

    return OrderModel
      .findByIdAndDelete(id)
      .exec();

  }

}

export const orderRepository =
  new OrderRepository();