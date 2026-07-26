import type {
  NextFunction,
  Request,
  Response,
} from 'express';

import {
  userService,
} from '@fortune-funding/users';

export async function getCurrentUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      res.status(401).json({
        success: false,
        message: 'Unauthorized',
      });

      return;
    }

    const user =
      await userService.findById(
        userId
      );

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
}