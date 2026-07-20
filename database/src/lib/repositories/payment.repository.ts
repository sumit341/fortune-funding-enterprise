import {
  PaymentModel,
} from '../models.js';


import type {
  CreatePaymentDto,
  UpdatePaymentDto,
  PaymentQueryDto,
} from '@fortune-funding/payments';



export class PaymentRepository {



  async create(
    data: CreatePaymentDto
  ) {


    return PaymentModel.create(
      data
    );

  }





  async findById(
    id: string
  ) {


    return PaymentModel
      .findById(id)
      .exec();

  }





  async findMany(
    query: PaymentQueryDto
  ) {


    const {

      page,

      limit,

      status,

      sortBy,

      order,

    } = query;



    const filter: Record<string, unknown> = {};



    if (status) {

      filter.status =
        status;

    }



    const skip =
      (page - 1) *
      limit;



    const [
      data,
      total,
    ] =
      await Promise.all([



        PaymentModel
          .find(filter)
          .sort({

            [sortBy]:
              order === 'asc'
                ? 1
                : -1,

          })
          .skip(skip)
          .limit(limit)
          .exec(),



        PaymentModel
          .countDocuments(filter)
          .exec(),



      ]);



    return {

      data,

      total,

      page,

      limit,

    };

  }





  async update(
    id: string,
    data: UpdatePaymentDto
  ) {


    return PaymentModel
      .findByIdAndUpdate(

        id,

        data,

        {

          new: true,

        }

      )
      .exec();

  }





  async delete(
    id: string
  ) {


    return PaymentModel
      .findByIdAndDelete(id)
      .exec();

  }



}




export const paymentRepository =
  new PaymentRepository();