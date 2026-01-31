import React from 'react'
import Title from '../component/Title'
import { useState } from 'react'
import { useContext } from 'react'
import { ShopDataContext } from '../context/ShopContext'
import { authcontext } from '../context/Authcontext'
import axios from 'axios'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

function Order() {

    let[orderData , setOrderData] = useState([])
    let {currency} = useContext(ShopDataContext)
      let {saveUrl} = useContext(authcontext)
   
     const loadOrdeData = async ()=>{
        try {
            const result = await axios.post(saveUrl+ "/api/order/userOrder", {}, {withCredentials:true})
            // console.log(result)      
            if(result.data){
                    let allordersItem = []
                    result.data.map((order)=>{
                        order.items.map((item)=>{
                            item['status'] = order.status
                            item['payment'] = order.payment
                            item['paymentMethod'] = order.paymentMethod 
                            item['date'] = order.date
                            allordersItem.push(item)
                        })
                    })
                    console.log(result.data)
                    toast.success("Order Success")
                    // .reverse meaning means it show order as currently
                    setOrderData(allordersItem.reverse())
                   }
        } catch (error) {
            console.log(error)
        }
     }

     useEffect(()=>{
      loadOrdeData()
     },[])


    

  return (
    <div className='lg:w-[99vw] w-[100vw] h-[100vh] p-[20px] pb-[150px] overflow-hiddden bg-slate-400 '>
    <div className='h-[8%] w-[100%] text-center mt-[80px]'>
     <Title text1={"MY"} text2={"ORDERS"} />
    </div>
         <div className='w-[100%] h-[92%] flex flex-wrap gap-[20px]'>
          {
            orderData.map((item,index)=>(
                <div key={index}   className='w-[100%] h-[25%]  mt-8 border-t border-b'>
                     <div className='w-[100%] h-[100%] flex items-start gap-6 bg-slate-600 py-[10px] px-[10px] rounded-2xl relative '>
                     <img src={item.image1} alt=""  className='lg:h-[80px] lg:w-[80px] h-[140px] w-[140px] rounded-md'/>
                     <div className='flex items-start justify-center flex-col'>
                        <p className='md:text-[25px] text-[20px] text-white font-semibold'>{item.name}</p>
                      <div className='flex items-center gap-[5px] lg:gap-[6px] md:gap-[20px]'>
                     <p className='md:text-[18px] text-[12px] lg:text-[15px] text-green-200'>{currency}{item.price}</p>
                     <p className='md:text-[18px] text-[12px] lg:text-[15px]  text-green-200'>Quantity: {item.quantity}</p>
                     <p className='md:text-[18px] text-[12px] lg:text-[15px]  text-green-200'>Size: {item.size}</p>
                      </div>

                     <div className='flex items-center'>
                         <p className='md:text-[18px] text-[12px] lg:text-[15px] text-green-200 '>
                           Date: <span className='md:text-[16px] lg:text-[15px] text-[11px] '> {new Date(item.date).toDateString()} </span>
                         </p>
                     </div>

                     <div className='flex items-center'>
                           <p className='md:text-[16px] text-[12px] lg:text-[15px] text-green-200 '>
                          Payment Method:{item.paymentMethod}
                           </p>
                     </div>
                          
                          <div className='absolute md:left-[55%] md:top-[40%] right-[2%] top-[2%]'>
                              <div className='flex items-center gap-[5px]'>
                              <p className='min-w-2 h-2 rounded-full  bg-green-500 '>

                              </p>

                              <p className='md:text-[17px] text-[0px] text-gray-100'>
                               {item.status}
                              </p>
                              </div>
                          </div>

                       <div className='absolute md:right-[5%] right-[1%] md:top-[40%] top-[65%]'>
                           <button className='px-[15px] py-[7px] px-[5px] rounded-md bg-yellow-100 text-green-300 text-[12px] md:text-[16px] cursor-pointer active:bg-slate-300 '
                           onClick={loadOrdeData}
                           >
                            {/*  onclick karne par loadorder function se jab data load hoga  and order track hoga */}
                                 Track Order
                           </button>
                       </div>
      

                     </div>
                     </div>
                </div>
            ))
          }
         </div>
    </div>
  )
}

export default Order