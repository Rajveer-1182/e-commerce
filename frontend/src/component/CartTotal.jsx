import React, { useContext } from 'react'
import { ShopDataContext } from '../context/ShopContext'
import Title from './Title'
import {  useNavigate } from 'react-router-dom'


function CartTotal() {

      const {currency, delivery_fee, getAmount} = useContext(ShopDataContext)
        const navigate = useNavigate()
  return (
    <div className='w-full lg:ml-[30px]'>
           <div className=' py-[0px] px-[10px]'>
             <Title text1={"CART"} text2={"TOTALS"}/>
           </div>

           <div className='  flex flex-col gap-2 mt-2 text-md p-[30px] border-[1px] rounded-lg  border-blue-100 bg-black/90 '>
            <div className='flex justify-between text-white text-[18px] p-[10px]'>
                   <p className='text-semibold text-gray-200 text-2xl'>Subtotal</p>
                   <p> {currency}{getAmount()}</p>
            </div>
               <hr />

               <div className='flex justify-between text-white text-[18px] p-[10px]'> 
                     <p className='text-gray-200 text-2xl'>Shipping Fee</p>
                     <p>{currency}{delivery_fee}</p>
               </div>
               <hr />

                 <div className='flex justify-between text-white text-[18px] p-[10px]'> 
                     <b className='text-gray-200 text-2xl'>Total Amount</b>
                     <b>{currency}{getAmount() === 0 ? 0: getAmount()+delivery_fee}</b>
               </div>
           </div>
    </div>
  )
}

export default CartTotal