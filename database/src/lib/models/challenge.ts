import {
  Schema,
  model,
  type InferSchemaType,
} from 'mongoose';

const challengeSchema =
  new Schema(
    {

      name: {
        type: String,
        required: true,
        trim: true,
      },

      accountSize: {
        type: Number,
        required: true,
      },

      price: {
        type: Number,
        required: true,
      },

      profitTarget: {
        type: Number,
        required: true,
      },

      dailyLossLimit: {
        type: Number,
        required: true,
      },

      maxLossLimit: {
        type: Number,
        required: true,
      },

      leverage: {
        type: Number,
        required: true,
      },

      maxTradingDays: {
        type: Number,
        required: true,
      },

      description: {
        type: String,
        default: '',
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

export const ChallengeModel =
  model(
    'Challenge',
    challengeSchema
  );

export type Challenge =
  InferSchemaType<
    typeof challengeSchema
  >;