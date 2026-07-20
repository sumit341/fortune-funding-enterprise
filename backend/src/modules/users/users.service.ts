import {
  UserModel,
} from '@fortune-funding/database';



export async function getCurrentUser(
  userId: string
) {

  const user =
    await UserModel.findById(
      userId
    );


  if (!user) {

    throw new Error(
      'User not found'
    );

  }


  return {

    id:
      user._id.toString(),

    name:
      user.name,

    email:
      user.email,

    role:
      user.role,

    isActive:
      user.isActive,

    createdAt:
      user.createdAt,

  };

}