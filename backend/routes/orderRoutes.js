
import express from 'express'
import isAauth from '../middleware/isAuth.js'
import { allOrders, placeOrder, updateOrder, userOrder,placeorderRazorpay, verifyorder,} from '../controller/orderController.js'
import adminAuth from '../middleware/adminAuth.js'


//  create a routes through express.Router
const orderRoutes  = express.Router()
//  we get the isAuth middleware beacuase we take userId 
// create routes for place oreder function
//  for user Routes
orderRoutes.post("/placeorder", isAauth,placeOrder)
orderRoutes.post("/razorpay", isAauth,placeorderRazorpay)
orderRoutes.post("/verifyrazorpay", isAauth,verifyorder)
orderRoutes.post("/userOrder", isAauth,userOrder)



//  for admin  Routes 
orderRoutes.post("/list",adminAuth,allOrders)
orderRoutes.post("/status",adminAuth,updateOrder)

export default orderRoutes
