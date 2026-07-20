import type {
  Request,
  Response,
  NextFunction,
} from 'express';


import {
  challengeService,
  challengeQuerySchema,
  createChallengeSchema,
  updateChallengeSchema,
} from '@fortune-funding/challenges';





export async function createChallenge(
  req: Request,
  res: Response,
  next: NextFunction
) {

  try {


    const data =
      createChallengeSchema.parse(
        req.body
      );


    const challenge =
      await challengeService.create(
        data
      );


    return res
      .status(201)
      .json({

        success: true,

        challenge,

      });


  } catch(error) {

    return next(error);

  }

}







export async function getChallenges(
  req: Request,
  res: Response,
  next: NextFunction
) {

  try {


    const query =
      challengeQuerySchema.parse(
        req.query
      );


    const result =
      await challengeService.list(
        query
      );


    return res.json({

      success: true,

      ...result,

    });


  } catch(error) {

    return next(error);

  }

}







export async function getChallengeById(
  req: Request,
  res: Response,
  next: NextFunction
) {

  try {


    const challenge =
      await challengeService.findById(

        String(
          req.params.id
        )

      );


    return res.json({

      success: true,

      challenge,

    });


  } catch(error) {

    return next(error);

  }

}







export async function updateChallenge(
  req: Request,
  res: Response,
  next: NextFunction
) {

  try {


    const data =
      updateChallengeSchema.parse(
        req.body
      );


    const challenge =
      await challengeService.update(

        String(
          req.params.id
        ),

        data

      );


    return res.json({

      success: true,

      challenge,

    });


  } catch(error) {

    return next(error);

  }

}







export async function deleteChallenge(
  req: Request,
  res: Response,
  next: NextFunction
) {

  try {


    const result =
      await challengeService.delete(

        String(
          req.params.id
        )

      );


    return res.json(
      result
    );


  } catch(error) {

    return next(error);

  }

}