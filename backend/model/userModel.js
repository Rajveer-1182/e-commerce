import mongoose, { mongo } from "mongoose";


const userSchema  = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
type:String,
required:true,
unique:true
    },
      number:{
    type:String,   // or Number
    // required:true
  },
    password:{
        type:String,
        required:true
    },
    cartData:{
        type:Object,
        default:{}
    }
},
{timestamps:true,minimize:false}
)

const userModel = mongoose.model("users",userSchema)

export default userModel