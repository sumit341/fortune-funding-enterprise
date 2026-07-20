import type {
  Request,
  Response,
  NextFunction,
} from 'express';


import {
  orderService,
} from '@fortune-funding/orders';



export async function createOrder(
  req: Request,
  res: Response,
  next: NextFunction
) {

  try {


    const order =
      await orderService.create(
        req.body
      );


    return res
      .status(201)
      .json({

        success:true,

        order,

      });


  } catch(error) {

    return next(error);

  }

}





export async function getOrders(
  req: Request,
  res: Response,
  next: NextFunction
) {

  try {


    const result =
      await orderService.list(
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





export async function getOrderById(
  req: Request,
  res: Response,
  next: NextFunction
) {

  try {


    const order =
      await orderService.findById(
        String(req.params.id)
      );


    return res.json({

      success:true,

      order,

    });


  } catch(error) {

    return next(error);

  }

}





export async function updateOrder(
  req: Request,
  res: Response,
  next: NextFunction
) {

  try {


    const order =
      await orderService.update(

        String(req.params.id),

        req.body

      );


    return res.json({

      success:true,

      order,

    });


  } catch(error) {

    return next(error);

  }

}





export async function deleteOrder(
  req: Request,
  res: Response,
  next: NextFunction
) {

  try {


    const result =
      await orderService.delete(

        String(req.params.id)

      );


    return res.json(

      result

    );


  } catch(error) {

    return next(error);

  }

}