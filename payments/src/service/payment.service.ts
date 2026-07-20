import {

  paymentRepository,

} from '../repository/index.js';



import {

  mapPayment,

} from '../mapper/index.js';



import type {

  CreatePaymentDto,

  UpdatePaymentDto,

  PaymentQueryDto,

} from '../dto/index.js';



import {

  PaymentNotFoundError,

} from '../errors/index.js';





export class PaymentService {



async create(
  data:CreatePaymentDto
){

  const payment =
    await paymentRepository.create(
      data
    );


  return mapPayment(
    payment
  );

}







async findById(
  id:string
){


  const payment =
    await paymentRepository.findById(
      id
    );


  if(!payment){

    throw new PaymentNotFoundError();

  }


  return mapPayment(
    payment
  );

}







async list(
  query:PaymentQueryDto
){

  const result =
    await paymentRepository.findMany(
      query
    );


  return {

    ...result,

    data:
      result.data.map(
        mapPayment
      ),

  };

}







async update(
 id:string,
 data:UpdatePaymentDto
){


 const payment =
   await paymentRepository.update(
     id,
     data
   );



 if(!payment){

   throw new PaymentNotFoundError();

 }



 return mapPayment(
   payment
 );

}







async delete(
 id:string
){


 const deleted =
   await paymentRepository.delete(
     id
   );



 if(!deleted){

   throw new PaymentNotFoundError();

 }



 return {

   success:true,

 };

}



}




export const paymentService =
 new PaymentService();