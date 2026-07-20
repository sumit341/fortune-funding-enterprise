import type {
  OrderResponseDto,
} from '../dto/index.js';


export const orderMapper = {


  toResponse(
    order:any
  ):OrderResponseDto {


    return {

      id:
        order._id.toString(),


      userId:
        order.userId,


      challengeId:
        order.challengeId,


      amount:
        order.amount,


      paymentMethod:
        order.paymentMethod,


      status:
        order.status,


      createdAt:
        order.createdAt,


      updatedAt:
        order.updatedAt,

    };


  },



  toResponseList(
    orders:any[]
  ){

    return orders.map(
      this.toResponse
    );

  }


};