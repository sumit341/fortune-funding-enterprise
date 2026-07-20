export interface PaymentRequest {

  orderId:string;

  userId:string;

  amount:number;

  paymentMethod:string;

  transactionId?:string;

  status?:
    | 'pending'
    | 'success'
    | 'failed'
    | 'refunded';

}