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
    id:string
  ) {

    const order =
      await orderRepository.findById(
        id
      );


    if(!order){

      throw new Error(
        'Order not found'
      );

    }


    return orderMapper.toResponse(
      order
    );

  }





  async list(
    query:OrderQueryDto
  ) {


    const {

      page,

      limit,

      status,

    } = query;



    const filter:any = {};



    if(status){

      filter.status =
        status;

    }



    const orders =
      await orderRepository.findMany(
        filter
      );



    const total =
      await orderRepository.count(
        filter
      );



    return {


      data:
        orderMapper.toResponseList(
          orders
        ),


      meta:{

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
    id:string,
    data:UpdateOrderDto
  ){

    const order =
      await orderRepository.update(
        id,
        data
      );



    if(!order){

      throw new Error(
        'Order not found'
      );

    }



    return orderMapper.toResponse(
      order
    );

  }





  async delete(
    id:string
  ){


    const order =
      await orderRepository.delete(
        id
      );



    if(!order){

      throw new Error(
        'Order not found'
      );

    }



    return {

      success:true,

    };


  }


}



export const orderService =
  new OrderService();