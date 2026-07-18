import mongoose, {
  Schema,
  type InferSchemaType,
  type Model,
} from 'mongoose';


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
      enum: [
        'user',
        'admin',
      ],
      default: 'user',
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);


export type User = InferSchemaType<
  typeof userSchema
>;


export const UserModel: Model<User> =
  mongoose.models.User ||
  mongoose.model<User>(
    'User',
    userSchema
  );