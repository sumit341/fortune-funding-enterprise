import {
  Schema,
  model,
  type InferSchemaType,
} from 'mongoose';



const orderSchema =
  new Schema(

    {


      userId: {

        type:String,

        required:true,

        index:true,

      },



      challengeId: {

        type:String,

        required:true,

        index:true,

      },



      amount: {

        type:Number,

        required:true,

      },



      paymentMethod: {

        type:String,

        required:true,

      },



      status: {

        type:String,

        enum:[

          'pending',

          'paid',

          'failed',

          'cancelled',

        ],

        default:'pending',

      },


    },


    {

      timestamps:true,

    }

  );



export type Order =
  InferSchemaType<
    typeof orderSchema
  >;



export const OrderModel =
  model<Order>(
    'Order',
    orderSchema
  );