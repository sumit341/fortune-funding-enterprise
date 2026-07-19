import mongoose, {
  Schema,
  type InferSchemaType,
  type Model,
} from 'mongoose';


const refreshTokenSchema =
  new Schema(
    {
      userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true,
      },

      tokenHash: {
        type: String,
        required: true,
        unique: true,
      },

      expiresAt: {
        type: Date,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );


export type RefreshToken =
  InferSchemaType<
    typeof refreshTokenSchema
  >;


export const RefreshTokenModel:
  Model<RefreshToken> =
    mongoose.models.RefreshToken ||
    mongoose.model<RefreshToken>(
      'RefreshToken',
      refreshTokenSchema
    );