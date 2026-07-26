import {
  Schema,
  model,
  type InferSchemaType,
} from 'mongoose';

import {
  ChallengeType,
} from '@fortune-funding/common';

const challengeSchema =
  new Schema(
    {

      name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
      },

      type: {
        type: String,
        enum: Object.values(
          ChallengeType
        ),
        required: true,
      },

      accountSize: {
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

      minimumTradingDays: {
        type: Number,
        required: true,
      },

      maximumTradingDays: {
        type: Number,
        required: true,
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