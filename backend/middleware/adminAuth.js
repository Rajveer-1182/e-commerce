import jwt from 'jsonwebtoken'

//  for the admin thats provide product
const adminAuth = async (req , res ,next)=>{
    let {token} = req.cookies;

    try {
            if (!token) {
        return res.status(401).json({
            message:"not authorizes person"
        })
    }
    
    let veriyfytToken = jwt.verify(token, process.env.JWT_SECRET)
  if (!veriyfytToken) {
    return res.status(400).json({
        message:"Invalid Token"
    })
  }

  req.adminEmail = process.env.ADMIN_EMAIL

  next()
    } catch (error) {
         console.log("admin auth error")
    return res.status(500).json({
        message:"is adminAuth error ${error}"
    })
    }
}

export default adminAuth