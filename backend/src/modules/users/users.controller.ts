import type {
  Response,
} from 'express';


import type {
  AuthRequest,
} from '../../middleware/auth.js';


import {
  getUserById,
} from './users.service.js';



export async function getMe(
  req: AuthRequest,
  res: Response
) {

  try {

    const userId =
      req.user?.userId;


    if (!userId) {

      return res
        .status(401)
        .json({

          success:false,

          message:
            'Unauthorized',

        });

    }


    const user =
      await getUserById(
        userId
      );


    return res.json({

      success:true,

      user,

    });


  } catch (error) {

    return res
      .status(500)
      .json({

        success:false,

        message:
          'Failed to fetch user',

      });

  }

}