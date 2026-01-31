import mongoose, { mongo } from 'mongoose'

const userSchema = new mongoose.Schema({


        name:{
         type:String,
        required:true
    },
    email:{
         type:String,
         required:true,
         unique:true
    },
      phone:{
         type:String,
         
         unique:true
    },
     password:{
         type:String,
         required:true,
       
    },
    isVeryfied:{
        type:Boolean,
        default:false
    },
    verificationCode:{
        type:String    
    }
},{timestamps:true})

const userModels = mongoose.model("useradmin",userSchema)

export default userModels