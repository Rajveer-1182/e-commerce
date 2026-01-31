import userModel from "../model/userModel.js";
import validator from "validator"
import bcrypt, { hash } from "bcryptjs"
import { generateToken, generateToken1 } from "../config/token.js";
import userModels from "../model/adminModel.js";

export const register = async (req,res)=>{
    try {
         const {name,email,password,number} = req.body;
         console.log(req.body);
         const isUserexist = await userModel.findOne({
            email:email
         })

         if(isUserexist){
            return res.status(401).json({
                message:"user Alredy exist"
            })
         }

      if(!validator.isEmail(email)){
       return res.status(401).json({
            message:"invalid email"
        })
      }

      if(password.length < 8){
        return res.status(401).json({
            message:"password must be at least 8 character"
        })
      }

      const hashedPassword = await bcrypt.hash(password,15)

      const user  = await userModel.create({
        name,email,
        password:hashedPassword,
        number
      })

      const token = generateToken(user._id)
      res.cookie("token" ,token,{
        httpOnly:true,
        sameSite:"strict",
        secure:false
      })

      const userData = user.toObject()
delete userData.password

return res.status(201).json(userData)


      // return res.status(201).json(user)

    } catch (error) {
        console.log("register error"+error);
        res.status(500).json({
            message:"server error"
        })
    }
}


export const login = async(req,res)=>{
  try {

    const {email,password} = req.body;

    const user = await userModel.findOne({email})
    if(!user){
      return res.status(401).json({
        message:"user not found"
      })
    }
    
    const ispasswordMatch = await bcrypt.compare(password, user.password)

    if(!ispasswordMatch){
      return res.status(401).json({
        message:"invalid password"
      })
    }

    const token = generateToken(user._id)

    res.cookie("token", token,{
      httpOnly:true,
      sameSite:"strict"
    })

    return res.status(200).json(user)
  } catch (error) {
    console.log("Login error" + error);
    return res.status(500).json({
      message:"Internal server error"
    })
    
  }
}


export const logout = async(req,res)=>{
  try {
    res.clearCookie("token")
      return res.status(200).json({
        message:"Logut succesfully"
      })
  } catch (error) {
    console.log("logout error" + error);
    
  }
}


export const googleregister = async(req, res)=>{
    try {
      let {name,email} = req.body;
      let user =  await userModel.findOne({email})
      if(!user){
          user = await userModel.create({
            name,email
          })
      }

      let token = await generateToken(user._id)
      res.cookie("token",token,{
        httpOnly:true,
        secure:false,
        sameSite:"strict",

      })
      return res.status(200).json({
        message:"user created successfully"
      })

    } catch (error) {
      console.log("google login error")
      return res.status(500).json({
        message:"google erroe ${error}"
      })
      
    }
}

export const googlelogin = async(req , res)=>{
   try {

    let {email,password} = req.body;

    let user = await userModel.findOne({email})
    if(!user){
      return res.status(401).json({
        message:"user not found"
      })
    }
    
    const ispasswordMatch = await bcrypt.compare(password, user.password)

    if(!ispasswordMatch){
      return res.status(401).json({
        message:"invalid password"
      })
    }

    const token = generateToken(user._id)

    res.cookie("token", token,{
      httpOnly:true,
      sameSite:"strict"
    })

    return res.status(200).json(user)
  } catch (error) {
    console.log("Login error" + error);
    return res.status(500).json({
      message:"Internal server error in googleLogIn"
    })
    
  }
}

export const adminregister = async  (req,res)=>{
try {
  const {name, email,phone,password}= req.body
  //  validation karte hai
  if(!email || !password || !name){
  return res.status(400).json({message:"All fields are required"})
  }

  const isExistuser = await userModels.findOne({email})
   if(isExistuser){
    return res.status(400).json({message:"Email already exist"})
   }

   const hashPassword = bcrypt.hashSync(password,10)
//  create a verification that is use to create a random code for the user 
   const verificationCode = Math.floor(100000 + Math.random()* 900000).toString()
   const user = new userModels({
    name,
    email,
    password: hashPassword,
    phone,
    //  send this verifcation code to their email and verify it 
    verificationCode
   })
   await user.save()
   return res.status(200).json({message:"user registert successfully",user})
 
} catch (error) {
     console.log(error)
     return res.status(400).json({message:"Internal servers error"})
}
}

export const adminLogin = async(req,res)=>{
  try {
    let {email, password} = req.body
    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASS)
    {
       const token = generateToken1(email)

    res.cookie("token", token,{
      httpOnly:true,
      sameSite:"strict"
    })

    return res.status(200).json(token)
    }

    return res.status(400).json({
      message:"Invalid credential in Admin Log in"
    })
  } catch (error) {
   return 
  }
}