import express from "express"
import isAauth from "../middleware/isAuth.js"
import { getAdmin, getCurrentUser } from "../controller/user.controller.js"
import adminAuth from "../middleware/adminAuth.js"

let userRoutes = express.Router()


userRoutes.get("/getCurrentUser", isAauth, getCurrentUser)

userRoutes.get("/getadmin", adminAuth, getAdmin)


export default userRoutes