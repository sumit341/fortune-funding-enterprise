import mongoose, {
  Schema,
  type InferSchemaType,
  type Model,
} from 'mongoose';


import {
  UserRole,
} from '@fortune-funding/common';



const userSchema = new Schema(
  {
    name: {

      type: String,

      required: true,

      trim: true,

      minlength: 2,

      maxlength: 50,

    },


    email: {

      type: String,

      required: true,

      unique: true,

      lowercase: true,

      trim: true,

      index: true,

    },


    passwordHash: {

      type: String,

      required: true,

      select: false,

    },


    role: {

      type: String,

      enum: Object.values(UserRole),

      default: UserRole.USER,

    },


    isActive: {

      type: Boolean,

      default: true,

    },

  },


  {

    timestamps:true,

  }

);



export type User =
  InferSchemaType<
    typeof userSchema
  >;



export const UserModel:
  Model<User> =

  mongoose.models.User ||

  mongoose.model<User>(
    'User',
    userSchema
  );