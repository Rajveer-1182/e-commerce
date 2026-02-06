import React from 'react'
import Nav from '../Components/Nav'
import SideBar from '../Components/SideBar'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthDataContext } from '../context/AuthContext'
import axios from 'axios'
import { useEffect } from 'react'
import { SiEbox } from "react-icons/si";

const Orders = () => {

  //  we create usesate for the mapping of data
     let[orders, setOrders] = useState([])
       let {serverUrl} = useContext(AuthDataContext)

      //  fetch all the product , create a function 
      const fetchAllOrders = async()=>{
        try {
           const result = await axios.post(serverUrl + "/api/order/list", {}, {withCredentials:true})
            //   reverse means if order show top and old order show bottom
          setOrders(result.data.reverse())
          } catch (error) {
          console.log(error)
        }
      }
      
      //  we take orderId beacuse we want satus
      const statusHandler = async(e , orderId)=>{
        try {
          const result = await axios.post( serverUrl +"/api/order/status" , {orderId,status:e.target.value},{withCredentials:true})
           if(result.data){
            // if result.daata aa gaya to fetchallorder ko call kara denge
            await fetchAllOrders()
           }
        } catch (error) {
          console.log(error)
        }
      }

      useEffect(()=>{
fetchAllOrders()
      },[])

  return (
<div className="w-full min-h-screen  text-white">
  <Nav />

  <div className="flex min-h-screen">
    
    {/* Sidebar */}
    <SideBar />

    {/* Right Content */}
    <div className="
      flex-1 lg:flex w-[5%] lg:w-[82%] ml-[80px] flex-col lg:ml-[276px] bg-slae-600  mt-[80px]  px-4 sm:px-6 md:px-8  py-6  overflow-x-hidden
    ">
      
      {/* Heading */}
      <div className="
        text-2xl sm:text-3xl md:text-4xl text-black font-bold  mb-6
      ">
        All Orders List
      </div>

      {/* Orders */}
      <div className="flex flex-col gap-6">
        {orders.map((order, index) => (
          <div
            key={index}
            className="
              w-full  bg-slate-600   rounded-xl   flex   flex-col lg:flex-row  lg:items-center  justify-between   p-4 sm:p-6
            "
          >
            <SiEbox className='w-[40px] h-[40px]'/>
{/* map our ultiple  items here  */}
            <div>
             <div className='flex items-start justify-center flex-col gap-[5px] text-[16px] text-white'>
              {
                    order.items.map((item,index)=>{
                      if(index === order.items.length - 1){
                        return  <p key={index}>
                               { item.name.toUpperCase()} * {item.quantity} <span>{item.size}</span>
                        </p>
                      } else{
                            return  <p key={index}>
                               { item.name.toUpperCase()} * {item.quantity} <span>{item.size}</span>,
                        </p>
                      }
                    })
              }
             </div>

                   <div className='text-[15px] text-green-300'>
                        <p>
                          {
                            order.address.firstName + " " + order.address.lastName
                          }
                               </p>

                          <p>
                            {
                               order.address.street + ", "
                            }
                          </p>

                          <p>
                            {
                               order.address.city + ", " + order.address.state +" ," + order.address.country+ " ," + order.address.pinCode
                             }
                          </p>

                            <p>
                            {
                               order.address.phone
                            }
                          </p>
  
                   </div>
            </div>

            <div className='text-[15px] text-green-300 '>
         <p> Items : {order.items.length}</p>
         <p> Method :{order.paymentMethod}</p>
         <p>Payment :{order.payment ? "Done" :"pending"}</p>
           <p>Date :{new Date(order.date).toLocaleDateString()}</p>
           <p className='text-[20px] text-white '> $ {order.amount}</p>
            </div>
            

              <select name="" id="" value={order.status} className='px-[5px] py-[10px] bg-slate-500 rounded-lg border-[1px] border-red-300' onChange={(e)=>{
                statusHandler(e, order._id)
              }}>
                <option value="Order Placed">Order Placed</option>
                <option value=" Packing"> Packing</option>
                <option value=" Shipped"> Shipped</option>
                <option value="Out for Delivery"> Out for delivery</option>
                <option value=" Deliverd"> Deliverd</option>

              </select>


          </div>
        ))}
      </div>

    </div>
  </div>
</div>

  )
}

export default Orders