import mongoose, { mongo }  from "mongoose";

// create a orderSchema for order thing
const orderSchema = new mongoose.Schema({
      userID:{
        type:String,
        required: true
      },
      items:{
              type:Array,
              required:true
      },
      amount:{
        type:Number,
        required:true
      },
      address:{
        type:Object,
        required:true
      },
      status:{
        type:String,
        required:true,
        default:"order placed"
      },
       paymentMethod: {          
    type: String,           
    required: true
  },
  payment: {               
    type: Boolean,
    default: false
  },
      date:{
        type:Number,
        // required:true
      }

}, {timestamps:true})

// create a order model product through oderSchema
const Order = mongoose.model("order", orderSchema)

export default Order;