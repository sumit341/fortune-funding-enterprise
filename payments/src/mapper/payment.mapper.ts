import type {
  PaymentResponseDto,
} from '../dto/index.js';



export function mapPayment(
  payment:any
):PaymentResponseDto {


  return {

    id:
      payment.id,

    orderId:
      payment.orderId,

    userId:
      payment.userId,

    amount:
      payment.amount,

    paymentMethod:
      payment.paymentMethod,

    transactionId:
      payment.transactionId,

    status:
      payment.status,

    createdAt:
      payment.createdAt,

    updatedAt:
      payment.updatedAt,

  };

}