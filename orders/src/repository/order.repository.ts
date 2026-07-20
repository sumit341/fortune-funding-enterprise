import {
  OrderModel,
} from '@fortune-funding/database';

import type {
  Order,
} from '@fortune-funding/database';


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
    filter: Record<string, unknown> = {}
  ) {

    return OrderModel
      .find(filter)
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
          new:true,
        }
      )
      .exec();

  }



  async delete(
    id:string
  ) {

    return OrderModel
      .findByIdAndDelete(id)
      .exec();

  }



  async count(
    filter:Record<string,unknown>={}
  ){

    return OrderModel
      .countDocuments(filter)
      .exec();

  }



}


export const orderRepository =
  new OrderRepository();