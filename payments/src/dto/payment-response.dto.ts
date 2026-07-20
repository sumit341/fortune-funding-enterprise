export interface PaymentResponseDto {


  id:string;


  orderId:string;


  userId:string;


  amount:number;


  paymentMethod:string;


  transactionId?:string;


  status:
    | 'pending'
    | 'success'
    | 'failed'
    | 'refunded';



  createdAt:Date;


  updatedAt:Date;

}