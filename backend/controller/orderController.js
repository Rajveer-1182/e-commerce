import Order from "../model/orderModel.js"
import User from '../model/userModel.js'
import Razorpay from 'razorpay'

// console.log("KEY ID:", process.env.RAZORPAY_KEY_ID);
// console.log("secre_key", process.env.RAZORPAY_KEY_SECRET)
// create a instance for RazorPay
const currency = "INR"
var instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});


//  for users
export const placeOrder = async(req, res)=>{
    try {
        const {items ,amount, address } = req.body
        const  userID  = req.userID;
        const orderData = {
            items, amount,  userID,address, 
            paymentMethod :"COD",
            payment:false,
            date:Date.now()
        }
        const newOrder =new Order(orderData)
        await newOrder.save() 
        // when the oder is done then cart data will be remove automatically
         await User.findByIdAndUpdate( userID,{cartData:{}})
        res.status(201).json({message:"order placed succesfully"})
        } 
    catch (error) {
        console.log(error)
        res.status(500).json({message:"oreder controller unsuccesfull"})
    }
}

export const placeorderRazorpay  = async(req,res)=>{
     try {
        // we take form the body items, addres and amount
        const {items ,amount, address} = req.body;
        const userID  =req.userID;
          const orderData = {
            items, amount,  userID,address, 
            paymentMethod :"razorPay",
            payment:false,
            date:Date.now()
        }
              const newOrder = new Order(orderData)
               await newOrder.save()

               const options = {
                amount:amount *100,
                currency :currency.toUpperCase(),
                //  in the reciept jo order create hua hai uska Id aa jayega
                // reciept: newOrder._id.toString()
                receipt: newOrder._id.toString(),
               }
                //   we create a order throungh instance of the razor 
               await instance.orders.create(options,(error,order)=>{
                if(error){
                    console.log(error," error in the order create  ")
                    return res.status(500).json(error)
                }
                res.status(200).json(order)
               })

     } catch (error) {
        console.log({message:error.message})
     }
}

export const verifyorder = async(req,res)=>{
    try {
        //  razor pay userid ko razor pay instance ke through fetch kar liya hai
        const userID = req.userID
        const {razorpay_order_id} = req.body
        //  we check here our razorpayId is valid or not
        const orderInfo =  await instance.orders.fetch(razorpay_order_id)
        if(orderInfo.status === 'paid'){
            //  our odrer find then ti update payment tru and orderInfo recive form the new order._id se
            await Order.findByIdAndUpdate(orderInfo.receipt,{payment:true});
            await User.findByIdAndUpdate(userID, {cartData:{}})
            res.status(200).json({message:'payment successful'})
        } else{
         res.status(400).json({ message: "payment failed" })
        }
    
    } catch (error) {
        res.status(500).json({ message: "server error" })
    }
}



export const userOrder = async(req,res)=>{
   try {
    const userID = req.userID;
    //  find the order through userID 
    const orders  = await Order.find({userID})
    return res.status(200).json(orders)
    
   } catch (error) {
    console.log(error)
    return res.status(500).json({message:"user order error"})
   }
}


// for admin order
//   find the all order
export const allOrders = async(req,res)=>{

    try {
        //  in the every order model that have order , ham unko find kar rahe hai
        const orders = await Order.find({})
        res.status(200).json(orders)
    } catch (error) {
         console.log(error)
             return res.status(500).json({message:"admin all order error"})
        }
}


//  we create a function that name is update function 
export const updateOrder = async(req,res)=>{
    try {
        // we pass the userId and status from the frontend
        const {orderId, status} = req.body;
        //     status
        await Order.findByIdAndUpdate(orderId, {status})
        return res.status(201).json({message:"status updated"})
    } catch (error) {
            return res.status(500).json({message:error.message})
    }
}


