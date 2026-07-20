import type {
  Request,
  Response,
  NextFunction,
} from 'express';


import {
  getCurrentUser as getUserById,
} from './users.service.js';



export async function getCurrentUser(

  req: Request,
  res: Response,
  next: NextFunction

): Promise<void> {

  try {


    const userId =
      req.user?.userId;


    if (!userId) {

      res.status(401).json({

        success:false,

        message:
          'Unauthorized',

      });

      return;

    }



    const user =
      await getUserById(
        userId
      );



    res.status(200).json({

      success:true,

      data:user,

    });



  } catch(error) {

    next(error);

  }

}