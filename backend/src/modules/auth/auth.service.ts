import {
  UserModel,
  RefreshTokenModel,
} from '@fortune-funding/database';


import {
  hashPassword,
  verifyPassword,
  hashToken,
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
  verifyTokenHash,
} from '@fortune-funding/auth';



interface RegisterInput {
  name: string;
  email: string;
  password: string;
}



interface LoginInput {
  email: string;
  password: string;
}




function getRefreshExpiryDate(): Date {

  return new Date(
    Date.now() +
      7 *
      24 *
      60 *
      60 *
      1000
  );

}





export async function registerUser(
  data: RegisterInput
) {


  const existingUser =
    await UserModel.findOne({
      email: data.email,
    });



  if (existingUser) {

    throw new Error(
      'Email already registered'
    );

  }




  const passwordHash =
    await hashPassword(
      data.password
    );




  const user =
    await UserModel.create({

      name: data.name,

      email: data.email,

      passwordHash,

    });




  return {

    id: user._id.toString(),

    name: user.name,

    email: user.email,

    role: user.role,

    isActive: user.isActive,

    createdAt: user.createdAt,

  };

}








export async function loginUser(
  data: LoginInput
) {


  const user =
    await UserModel
      .findOne({
        email: data.email,
      })
      .select('+passwordHash');




  if (!user) {

    throw new Error(
      'Invalid email or password'
    );

  }




  const valid =
    await verifyPassword(
      data.password,
      user.passwordHash
    );




  if (!valid) {

    throw new Error(
      'Invalid email or password'
    );

  }





  const payload = {

    userId:
      user._id.toString(),

  };





  const accessToken =
    signAccessToken(
      payload
    );




  const refreshToken =
    signRefreshToken(
      payload
    );





  const tokenHash =
    await hashToken(
      refreshToken
    );





  await RefreshTokenModel.create({

    userId:
      user._id,

    tokenHash,

    expiresAt:
      getRefreshExpiryDate(),

  });







  return {


    user: {

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

    },


    accessToken,


    refreshToken,


  };


}









export async function refreshAccessToken(
  refreshToken: string
) {



  const payload =
    verifyRefreshToken(
      refreshToken
    );




  const storedToken =
    await RefreshTokenModel.findOne({

      userId:
        payload.userId,

    });




  if (!storedToken) {

    throw new Error(
      'Refresh token revoked'
    );

  }




  const valid =
    await verifyTokenHash(

      refreshToken,

      storedToken.tokenHash

    );




  if (!valid) {

    throw new Error(
      'Invalid refresh token'
    );

  }





  await RefreshTokenModel.deleteOne({

    _id:
      storedToken._id,

  });






  const newRefreshToken =
    signRefreshToken({

      userId:
        payload.userId,

    });






  await RefreshTokenModel.create({

    userId:
      payload.userId,

    tokenHash:
      await hashToken(
        newRefreshToken
      ),

    expiresAt:
      getRefreshExpiryDate(),

  });






  const accessToken =
    signAccessToken({

      userId:
        payload.userId,

    });





  return {

    accessToken,

    refreshToken:
      newRefreshToken,

  };

}









export async function logoutUser(
  refreshToken: string
) {



  const payload =
    verifyRefreshToken(
      refreshToken
    );




  await RefreshTokenModel.deleteMany({

    userId:
      payload.userId,

  });




  return {

    message:
      'Logged out successfully',

  };

}