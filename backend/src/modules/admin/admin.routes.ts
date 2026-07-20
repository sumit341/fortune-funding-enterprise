import {
  Router,
} from 'express';



export const adminRouter =
  Router();



adminRouter.get(
  '/',
  (_req,res)=>{

    res.json({

      success:true,

      message:
        'Admin module working',

    });

  }
);