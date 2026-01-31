import React, { useState, useEffect } from 'react'
import Title from '../component/Title'
import { useContext } from 'react'
import { ShopDataContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom';
import { IoTrashBinSharp } from "react-icons/io5";
import CartTotal from '../component/CartTotal';
import { toast } from 'react-toastify';

//  in his cart , jo bhi amare card ke andar data hai use map karna taki wo cart me dikhe 
function Cart() {

      const {cartItems, products, currency, updateCart}  =  useContext(ShopDataContext);
      const [cartData, setCartData] = useState([]);
      const navigate = useNavigate();
      
    //  console.log(updateCart)

    useEffect(()=>{
        const tempData = [];
        for( const items in cartItems){
            for(const item in cartItems[items]){
                if(cartItems[items][item] > 0){
                    tempData.push({
                        _id: items,
                        size: item,
                        quantity: cartItems[items][item]
            })
        }
    }
    }  setCartData (tempData);
  
},[cartItems]);

  return (
    <div className='w-[100vw] lg:w-[99vw] min-h-[100vh] p-[20px] overflow-hidden bg-gray-600 '>
     <div className='h-[8%] w-[100%] text-center mt-[80px] '>
            <Title text1={"YOUR"} text2={"CART"}/>
     </div>
     
     <div className='w-[100%] h-[92%] flex flex-wrap gap-[20px]'> 
         {
              cartData.map((item,index)=>{
                const productData = products.find((product) =>
                  product._id === item._id)
                
                if (!productData) {
  console.warn("Product not found for cart item:", item._id);
  return null; 
}
                          
      

                return(
                    <div key={index} className='w-[100%] h-[10%] border-t border-b rounded-lg'>
                        <div className='w-[100%] h-[80%] flex items-start gap-6 bg-slate-800 py-[10px] px-[20px] rounded-[2xl] relative'>
                            <img 
                             className='h-[100px] w-[100px] rounded-md'
                            src={productData.image1} alt="" />
                        
                          <div className='flex items-start justify-center flex-col gap-[10px] '>
                   <p className='text-xl font-semibold text-gray-200 '>
                    {productData.name}
                   </p>

                   <p className='text-md font-medium text-gray-300 '>
                   {currency} {productData.price}
                   </p>
                   
                   <p className='w-[100px] h-[40px] mt-[5px] text-[16px] text-[white] bg-slate-600 rounded-md flex items-center justify-center border-[1px] border-green-100'>
                    Size : {item.size}
                   </p>
                        </div>

                         <input type="number" min={1} defaultValue={item.quantity}
                       className='md:max-w-20 max-w-10 md:px-2 md:py-2 py-[5px] text-white text-[18px] font-smibold bg-black  rounded-lg absolute  md:top-[40%] top-[46%] left-[75%] md:left-[50%] border-[1px] border-green-100 '
                         onChange={(e) => e.target.value === ' ' || e.target.value === "0" ? null : updateCart(item._id , item.size , Number(e.target.value))}
                       />

                       <IoTrashBinSharp 
                        className='text-red-300 text-4xl w-[25px] absolute top-[50%] md:top-[40%] md:right-[5%] right-1'
                        onClick={(e)=> updateCart(item._id , item.size , Number(e.target.value,0))}
                       />
                        </div>
                       
                     
                    </div>

                    
                      
                )
              })

         }  
       
           
           <div className='flex justify-start items-end my-20'>
                        <div className='w-full sm:w-[450px]'>
                            <CartTotal/>
                            
 
  
             <button className='text-[18px] hover:bg-slate-500 font-semibold cursor-pointer bg-slate-300 text-black py-[10px] px-[50px] rounded-[4xl] text-bold flex items-center justify-center gap-[20px] border-[3px] border-green-400 ml-[30px] mt-[20px]'
              onClick={()=>{
                if (cartData.length > 0){
                    navigate("/placeOrder")
                }
                else{
                    console.log(" your cart is empty")
                }
              }}
              >
           PROCEED TO CHECKOUT
              </button>

                       </div>
                      </div>
            
     </div>

    </div>
  )
}

export default Cart