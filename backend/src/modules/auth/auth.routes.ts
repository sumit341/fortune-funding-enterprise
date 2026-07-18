import {
  Router,
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



export const authRouter =
  Router();





authRouter.post(
  '/register',
  async (req, res) => {


    const input =
      registerSchema.parse(
        req.body
      );



    const user =
      await registerUser(
        input
      );



    return res
      .status(201)
      .json({

        message:
          'User registered',

        user,

      });


  }
);








authRouter.post(
  '/login',
  async (req, res) => {


    const input =
      loginSchema.parse(
        req.body
      );



    const result =
      await loginUser(
        input
      );



    return res.json(
      result
    );


  }
);









authRouter.post(
  '/refresh',
  async (req, res) => {



    const {
      refreshToken,
    } = req.body;





    if (!refreshToken) {


      return res
        .status(400)
        .json({

          message:
            'Refresh token required',

        });


    }






    const result =
      await refreshAccessToken(
        refreshToken
      );





    return res.json(
      result
    );


  }
);









authRouter.post(
  '/logout',
  async (req, res) => {



    const {
      refreshToken,
    } = req.body;





    if (!refreshToken) {


      return res
        .status(400)
        .json({

          message:
            'Refresh token required',

        });


    }






    const result =
      await logoutUser(
        refreshToken
      );






    return res.json(
      result
    );


  }
);