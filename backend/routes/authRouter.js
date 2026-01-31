import express from 'express'
import { login, logout, register, googleregister ,googlelogin, adminLogin,adminregister} from '../controller/authController.js'



const authRouter = express.Router()

authRouter.post('/register',register)

authRouter.post('/adminregister',adminregister )

authRouter.post('/login',login)

authRouter.post('/logout' ,logout)

authRouter.post('/googleregister', googleregister)

authRouter.post('/googlelogin', googlelogin)

authRouter.post('/adminLogin', adminLogin)

export default authRouter