import {
  OrderModel,
  type Order,
} from '../models/order.js';


import {
  BaseRepository,
} from './base.repository.js';



export class OrderRepository
extends BaseRepository<Order>{


  constructor(){

    super(OrderModel);

  }



  async findByUserId(
    userId:string
  ){

    return this.model
      .find({
        userId,
      })
      .sort({
        createdAt:-1,
      })
      .exec();

  }



  async findByChallengeId(
    challengeId:string
  ){

    return this.model
      .find({
        challengeId,
      })
      .exec();

  }



}



export const orderRepository =
  new OrderRepository();