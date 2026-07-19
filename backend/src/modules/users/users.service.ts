import {
  UserModel,
} from '@fortune-funding/database';


import type {
  UpdateProfileInput,
} from './users.schema.js';



export async function getUserById(
  userId:string
) {

  const user =
    await UserModel
      .findById(userId)
      .select(
        '-passwordHash'
      );


  if(!user){

    throw new Error(
      'User not found'
    );

  }


  return user;

}





export async function updateUserProfile(
  userId:string,
  data:UpdateProfileInput
){

  const user =
    await UserModel
      .findByIdAndUpdate(

        userId,

        data,

        {
          new:true,
          runValidators:true,
        }

      )
      .select(
        '-passwordHash'
      );


  if(!user){

    throw new Error(
      'User not found'
    );

  }


  return user;

}