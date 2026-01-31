import React, { useContext } from 'react'
import { ShopDataContext } from '../context/ShopContext'
import Title from './Title'
import {  useNavigate } from 'react-router-dom'


function CartTotal() {

      const {currency, delivery_fee, getAmount} = useContext(ShopDataContext)
        const navigate = useNavigate()
  return (
    <div className='w-full lg:ml-[30px]'>
           <div className='text-xl py-[10px] '>
             <Title text1={"CART"} text2={"TOTALS"}/>
           </div>

           <div className='  flex  flex-col gap-2 mt-2 text-md p-[30px] border-[1px] border-blue-300'>
            <div className='flex justify-between text-white text-[18px] p-[10px]'>
                   <p>Subtotal</p>
                   <p> {currency}{getAmount()}</p>
            </div>
               <hr />

               <div className='flex justify-between text-white text-[18px] p-[10px]'> 
                     <p>Shipping Fee</p>
                     <p>{currency}{delivery_fee}</p>
               </div>
               <hr />

                 <div className='flex justify-between text-white text-[18px] p-[10px]'> 
                     <b>Total Amount</b>
                     <b>{currency}{getAmount() === 0 ? 0: getAmount()+delivery_fee}</b>
               </div>
           </div>
    </div>
  )
}

export default CartTotal