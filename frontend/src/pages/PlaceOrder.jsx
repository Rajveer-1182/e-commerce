import React, { useContext, useState } from 'react'
import Title from '../component/Title'
import CartTotal from '../component/CartTotal'
import RazorPay from '../assets/razorpay.jpg'
import { data, useNavigate } from 'react-router-dom'
import { ShopDataContext } from '../context/ShopContext'
import { authcontext } from '../context/Authcontext'
import axios from 'axios'
import Order from './Order'



function PlaceOrder() {
   let [method, setMethod] = useState("COD")
    const {cartItems , setCartItems, getAmount, delivery_fee,products } = useContext(ShopDataContext)
    let {saveUrl} = useContext(authcontext)
    let navigate = useNavigate();
  //   we set that value in once time means if the user want to place order thenn he will be set all the data
   let[formData, setFormData] = useState({        
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    pinCode:"",
    country:"",
    phone:""
   })

  //  we create a function take name and value 

  const onChangeHandler = (e)=>{
      const name = e.target.name;
      const value = e.target.value;
       setFormData(data => ({...data,[name]:value}))
      //  create onsubmit function that is create orderplaced
      }

          //  we have take the payment from the user then then we create a function for teh user
            //  we take the order from razorpay so we create the  

       const initPay = (order) => {
  const options = {
    key: import.meta.env.VITE_RAZORPAY_KEY_ID,
    amount: order.amount,
    currency: order.currency,
    name: "Order Payment",
    description: "Order payment",
    order_id: order.id, // 🔥 Razorpay ka order id

    handler: async function (response) {
      console.log("Payment Success:", response);

      // yahan backend me verify API call hoti hai
     
      // await axios.post("/api/order/verify", response, { withCredentials: true })
       const {data} = await axios.post(saveUrl + "/api/order/verifyrazorpay", response,{withCredentials:true})
      if(data){
        // console.log(data)
              navigate("/order")
        setCartItems({})
  
      }

      },
    theme: {
      color: "#3399cc",
    },
  };
  const rzp = new window.Razorpay(options);
  rzp.open(); // ✅ popup yahan open hota hai
};



         const onsubmitHandler = async (e)=>{
        e.preventDefault();

        try {
          // we create a variable of orderItems  jo items hai unko lene ke liye 
          let orderItems  =[]
           for(const items in cartItems){
            for(const item in cartItems[items]){
              if(cartItems[items][item] > 0){
                //  it is search the products and find it which is the product._id === items if yes then it will work
                const itemsInfo  = structuredClone(products.find(product => product._id === items))

                if(itemsInfo){
                  itemsInfo.size = item
                  itemsInfo.quantity  = cartItems[items][item]
                  // push the itemInfo into ordersItem
                  orderItems.push(itemsInfo)
                }
              }
            }
           }

           let orderData = {
            address:formData,
            items:orderItems,
            amount:getAmount() + delivery_fee
           }

           switch(method){
             case 'COD':
              const result = await axios.post(saveUrl+ "/api/order/placeorder",
                orderData , {withCredentials:true})
                console.log(result.data) 

                if(result.data){
                  setCartItems({})
                  navigate("/order")
                }
                else{
                  console.log(result.data.message)
                }
                break;


                case 'razorPay':
                    const resultRazorpay = await axios.post(saveUrl+ "/api/order/razorpay", orderData, {withCredentials:true})
                           if(resultRazorpay.data){
                            //  here is initPay data is order
                            console.log(resultRazorpay.data)
                            initPay(resultRazorpay.data)
                           }
                 break;

                default:
                break;
           }
        
        } catch (error) {
           console.log(error)
        }
      }

    
  return (
    <div className='lg:w-[99vw] w-[100vw] min-h-[100vh] bg-slate-500 flex items-center justify-center flex-col md:flex-row gap-[50px] relative'>
         <div className='lg:w-[50%] w-[100%] h-[100%] flex items-center justify-center lg:mt-[0px] mt-[90px]'>
             <form action=" " onSubmit={onsubmitHandler} className=' lg:w-[70%] w-[95%} lg:h-[70%] h-[100%]'>
                 
                   <div className='py-[10px]'>
                   <Title text1={"DELIVERY"} text2={"INFORMATION"}/>
                    </div>     

                     <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px] '>    
                         <input type="text" placeholder='First name' className='w-[48%] h-[50px] rounded-md shadow-sm shadow-red bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] required' 
                         onChange={onChangeHandler} name='firstName' value={formData.firstName}
                         />
                           
                           <input type="text" placeholder='Last name' className='w-[48%] h-[50px] rounded-md shadow-sm shadow-red bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] required' 
                            onChange={onChangeHandler} name='lastName' value={formData.lastName}
                           />
                     </div>

                      <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px] '> 
                         <input type="email" placeholder='Email adress' className='w-[100%] h-[50px] rounded-md shadow-sm shadow-red bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] required' 
                          onChange={onChangeHandler} name='email' value={formData.email}
                         />
                               </div>

                                 <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px] '> 
                         <input type="text" placeholder='Street' className='w-[100%] h-[50px] rounded-md shadow-sm shadow-red bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] required'
                          onChange={onChangeHandler} name='street' value={formData.street}
                         />
                               </div>

                               
                     <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px] '>    
                         <input type="text" placeholder='City' className='w-[48%] h-[50px] rounded-md shadow-sm shadow-red bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] required' 
                          onChange={onChangeHandler} name='city' value={formData.city}
                         />
                           <input type="text" placeholder='State' className='w-[48%] h-[50px] rounded-md shadow-sm shadow-red bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] required' 
                            onChange={onChangeHandler} name='state' value={formData.state}
                           />
                     </div>

           
                     <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px] '>    
                         <input type="text" placeholder='PinCode' className='w-[48%] h-[50px] rounded-md shadow-sm shadow-red bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] required' 
                          onChange={onChangeHandler} name='pinCode' value={formData.pinCode}
                         />
                           <input type="text" placeholder='Country' className='w-[48%] h-[50px] rounded-md shadow-sm shadow-red bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] required' 
                            onChange={onChangeHandler} name='country' value={formData.country}
                           />
                     </div>
                                 <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px] '> 
                         <input type="text" placeholder='Phone' className='w-[100%] h-[50px] rounded-md shadow-sm shadow-red bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] required' 
                          onChange={onChangeHandler} name='phone' value={formData.phone}
                         />
                               </div>

                                   

                               <div>

                                  <button type='submit'  className='text-[18px] hover:bg-slate-500 cursor-pointer bg-slate-600 py-[10px] px-[50px] rounded-lg text-white flex items-center justify-center gap-[20px] border-[1px] border-green-100 ml-[30px] mt-[20px]'
              // onClick={()=>{
              //   if (cartData.length > 0){
              //       navigate("/placeorder")
              //   }
              //   else{
              //       console.log(" your cart is empty")
              //   }
              // }}
              > Place Order</button>  
                               </div>
             </form>       
         </div>
           
         
             <div className='lg:w-[50%]  w-[100%] min-h-[100%] flex items-center justify-center gap-[30px]' >
          <div className=' lg:w-[90%] w-[90%] lg:h-[70%] h-[100%] flex items-center justify-center gap--[10px] flex-col '>
           <CartTotal/>
           <div className='py-[10px]'>
                   <Title text1={"PAYMENT"} text2={"METHOD"}/>
                    </div>
        {/* Write here payment method for the orders */}
                    <div className='w-[100%] h-[30vh] lg:h-[100px] font-bold flex items-start mt-[20p] lg:mt-[0px] justify-cneter gap-[50px]'>
                          


                        <button type="button"
  onClick={() => setMethod("razorPay")}
  className={`w-[150px] h-[50px] cursor-pointer 
    ${method === "razorPay" ? 'border-[5px] border-blue-800 bg-yellow-800' : ''}
  `}
>
  <img src={RazorPay} alt="" className="w-full h-full object-fill" />
</button>




                     {/* <button className={`w-[150px] h-[50px] bg-green-300 cursor-pointer rounded-sm  ${method === "razorPay" ? 'border-[5px] border-blue-800 bg-yellow-800 rounded-sm' : ' '}`}>
                       <img src={RazorPay} alt=""  className='w-[100%] h-[100%] object-fill rounded-sm'/>
                     </button> */}


                         <button type="button"
  onClick={() => setMethod("COD")}
  className={`w-[200px] h-[50px] cursor-pointer font-bold
    ${method === "COD" ? 'border-[2px] border-blue-800' : ''}
  `}
>
  CASH ON DELIVERY
</button>



                        {/* it is set default cash on delivery for every payment */}
                         {/* <button className={`w-[200px] h-[50px] bg-green-50 text-[14px] cursor-pointer px-[20px] rounded-xl font-bold  ${method === "COD" ? 'border-[2px] border-blue-800 rounded-sm' : ' '}`}>
                          CASH ON DELIVERY
                          </button>  */}
                    </div>


              
          </div>

                    


             </div>

    </div>
  )
}

export default PlaceOrder