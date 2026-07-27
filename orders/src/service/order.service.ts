import {
  orderRepository,
} from '../repository/index.js';

import {
  orderMapper,
} from '../mapper/index.js';

import type {
  CreateOrderDto,
  UpdateOrderDto,
  OrderQueryDto,
} from '../dto/index.js';

import {
  OrderNotFoundError,
} from '../errors/index.js';

export class OrderService {

  async create(
    data: CreateOrderDto
  ) {

    const order =
      await orderRepository.create(
        data
      );

    return orderMapper.toResponse(
      order
    );

  }

  async findById(
    id: string
  ) {

    const order =
      await orderRepository.findById(
        id
      );

    if (!order) {

      throw new OrderNotFoundError();

    }

    return orderMapper.toResponse(
      order
    );

  }

  async list(
    query: OrderQueryDto
  ) {

    const orders =
      await orderRepository.findMany(
        query
      );

    const total =
      await orderRepository.count(
        query
      );

    return {

      items:
        orderMapper.toResponseList(
          orders
        ),

      pagination: {

        page:
          query.page,

        limit:
          query.limit,

        total,

        totalPages:
          Math.ceil(
            total /
            query.limit
          ),

      },

    };

  }

  async update(
    id: string,
    data: UpdateOrderDto
  ) {

    const order =
      await orderRepository.update(
        id,
        data
      );

    if (!order) {

      throw new OrderNotFoundError();

    }

    return orderMapper.toResponse(
      order
    );

  }

  async delete(
    id: string
  ) {

    const order =
      await orderRepository.delete(
        id
      );

    if (!order) {

      throw new OrderNotFoundError();

    }

    return {

      success: true,

    };

  }

}

export const orderService =
  new OrderService();