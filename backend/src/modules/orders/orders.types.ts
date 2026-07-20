export interface OrderRequest {

  userId:string;

  challengeId:string;

  amount:number;

  paymentMethod:string;

  status?:
    | 'pending'
    | 'paid'
    | 'failed'
    | 'cancelled';

}