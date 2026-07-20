import type {
  Request,
  Response,
  NextFunction,
} from 'express';


import {
  paymentService,
} from '@fortune-funding/payments';



export async function createPayment(
  req: Request,
  res: Response,
  next: NextFunction
) {

  try {


    const payment =
      await paymentService.create(
        req.body
      );



    return res
      .status(201)
      .json({

        success:true,

        payment,

      });


  } catch(error) {


    return next(error);


  }

}







export async function getPayments(
  req: Request,
  res: Response,
  next: NextFunction
) {

  try {


    const result =
      await paymentService.list(

        req.query as any

      );



    return res.json({

      success:true,

      ...result,

    });



  } catch(error) {


    return next(error);


  }

}







export async function getPaymentById(
  req: Request,
  res: Response,
  next: NextFunction
) {

  try {


    const payment =
      await paymentService.findById(

        String(req.params.id)

      );



    return res.json({

      success:true,

      payment,

    });



  } catch(error) {


    return next(error);


  }

}







export async function updatePayment(
  req: Request,
  res: Response,
  next: NextFunction
) {

  try {


    const payment =
      await paymentService.update(

        String(req.params.id),

        req.body

      );



    return res.json({

      success:true,

      payment,

    });



  } catch(error) {


    return next(error);


  }

}







export async function deletePayment(
  req: Request,
  res: Response,
  next: NextFunction
) {

  try {


    const result =
      await paymentService.delete(

        String(req.params.id)

      );



    return res.json(

      result

    );



  } catch(error) {


    return next(error);


  }

}