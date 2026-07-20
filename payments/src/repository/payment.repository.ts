import type {
  PaymentQueryDto,
  CreatePaymentDto,
  UpdatePaymentDto,
} from '../dto/index.js';



const payments:any[] = [];



export class PaymentRepository {



  async create(
    data:CreatePaymentDto
  ) {


    const payment = {

      id:
        crypto.randomUUID(),

      ...data,

      createdAt:
        new Date(),

      updatedAt:
        new Date(),

    };


    payments.push(
      payment
    );


    return payment;

  }





  async findById(
    id:string
  ) {


    return payments.find(
      payment =>
        payment.id === id
    );

  }





  async findMany(
    query:PaymentQueryDto
  ) {


    let result =
      [...payments];



    if(query.status){

      result =
        result.filter(
          item =>
            item.status === query.status
        );

    }



    return {

      data:result,

      page:query.page,

      limit:query.limit,

      total:
        result.length,

    };

  }





  async update(
    id:string,
    data:UpdatePaymentDto
  ) {


    const index =
      payments.findIndex(
        item =>
          item.id === id
      );



    if(index === -1){

      return null;

    }



    payments[index] = {

      ...payments[index],

      ...data,

      updatedAt:
        new Date(),

    };



    return payments[index];

  }





  async delete(
    id:string
  ) {


    const index =
      payments.findIndex(
        item =>
          item.id === id
      );



    if(index === -1){

      return false;

    }



    payments.splice(
      index,
      1
    );


    return true;

  }



}



export const paymentRepository =
  new PaymentRepository();