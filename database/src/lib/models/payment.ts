import mongoose, {
  Schema,
  type InferSchemaType,
  type Model,
} from 'mongoose';



const paymentSchema =
new Schema(

  {


    orderId: {

      type:String,

      required:true,

      index:true,

    },



    userId: {

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



    transactionId: {

      type:String,

      default:null,

    },



    status: {

      type:String,

      enum:[

        'pending',

        'success',

        'failed',

        'refunded',

      ],

      default:'pending',

    },


  },


  {

    timestamps:true,

  }

);




export type Payment =
InferSchemaType<
 typeof paymentSchema
>;




export const PaymentModel:Model<Payment> =

mongoose.models.Payment ||

mongoose.model<Payment>(

  'Payment',

  paymentSchema

);