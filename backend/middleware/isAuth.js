import jwt from 'jsonwebtoken'

const isAauth = async (req , res, next)=>{
try {
   let {token} = req.cookies

   if(!token){
    return res.status(400).json({
        message:"user have not token"
    })
   }

   let verifyToken = jwt.verify(token,process.env.JWT_SECRET)

   if(!verifyToken){
    return res.status(400).json({
        message:"token does not verify"
    })
   }

   req.userID = verifyToken.id
   next()

} catch (error) {
    console.log("isAutherroe")
    return res.status(500).json({
        message:"is Auth error ${erroe}"
    })
    
}
}

export default isAauth