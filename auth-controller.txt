import type {
  Request,
  Response,
  NextFunction,
} from 'express';


import {
  registerSchema,
  loginSchema,
} from './auth.schema.js';


import {
  registerUser,
  loginUser,
  refreshAccessToken,
  logoutUser,
} from './auth.service.js';





export async function registerController(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {

  try {


    const input =
      registerSchema.parse(
        req.body
      );



    const user =
      await registerUser(
        input
      );



    res
      .status(201)
      .json({

        success: true,

        message:
          'User registered',

        user,

      });


    return;



  } catch(error) {


    next(error);

    return;


  }

}









export async function loginController(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {


  try {


    const input =
      loginSchema.parse(
        req.body
      );



    const result =
      await loginUser(
        input
      );



    res.json({

      success: true,

      ...result,

    });



    return;



  } catch(error) {


    next(error);

    return;


  }

}









export async function refreshController(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {


  try {


    const {
      refreshToken,
    } = req.body;



    if(!refreshToken){


      res
        .status(400)
        .json({

          success:false,

          message:
            'Refresh token required',

        });


      return;


    }




    const result =
      await refreshAccessToken(
        refreshToken
      );



    res.json({

      success:true,

      ...result,

    });



    return;



  } catch(error) {


    next(error);

    return;


  }

}









export async function logoutController(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {


  try {


    const {
      refreshToken,
    } = req.body;



    if(!refreshToken){


      res
        .status(400)
        .json({

          success:false,

          message:
            'Refresh token required',

        });


      return;


    }




    const result =
      await logoutUser(
        refreshToken
      );



    res.json({

      success:true,

      ...result,

    });



    return;



  } catch(error) {


    next(error);

    return;


  }

}