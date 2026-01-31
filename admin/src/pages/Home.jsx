import React from 'react'
import Nav from '../Components/Nav'
import SideBar from '../Components/SideBar'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthDataContext } from '../context/AuthContext'
import axios from 'axios'
import { useEffect } from 'react'

const Home = () => {

  //  in the total product we get the total product number by hte axois.get  api through and it set from 0 to number of the items
    const[totalProducts, setTotalProducts] = useState(0)
    //  in the total order we find the total order thats user have orders
    const [totalOrders, setTotalOrders] = useState(0)
    //   we take the serverlurl from the authDataCOntext 
    let {serverUrl} = useContext(AuthDataContext)


    //  we call the two function first is listing and second one is order
      const fetchCounts = async()=>{
        try {
           const products = await axios.get(`${serverUrl}/api/product/list`,{}, {withCredentials:true})
           setTotalProducts(products.data.length )

           const orders = await axios.post(`${serverUrl}/api/order/list` ,{},{withCredentials:true})
              setTotalOrders(orders.data.length)
          } catch (error) {
          console.log(error,"failed to fetch counts")
        }
      }

      useEffect(()=>{
   fetchCounts()
      },[])
    
  return (
    <div className="w-screen h-screen bg-blue-400 text-white relative">
       <Nav/>
       <SideBar/>
        {/*  how many order we get and listed */}

        <div className='w-[70vw] h-[100vh] absolute left-[25%] flex items-start flex-col gap-[40px] py-[100px]'>
            <h1 className='text-[35px] text-gray-300'> 
              OneCart Admin Panel </h1> 

              <div className='flex items-center justify-start gap-[50px] flex-col md:flex-row '>
                  <div className='w-[400px] text-gray-300 max-w-[90%] h-[200px] bg-slate-600 flex items-center justify-center flex-col gap-[20px] rounded-lg shadow-sm shadow-black backdrop:blur-lg md:text-[25px] text-[20px] border-[1px] border-green-400'>
                  Total no of products : <span className='px-[20px] py-[10px] bg-pink-100 text-black rounded-lg flex items-center justify-center border-[1px]'>
                    {totalProducts}
                  </span>
                  </div>


                  <div className='w-[400px] text-gray-300 max-w-[90%] h-[200px] bg-slate-600 flex items-center justify-center flex-col gap-[20px] rounded-lg shadow-sm shadow-black backdrop:blur-lg md:text-[25px] text-[20px] border-[1px] border-green-400'>
                  Total no of Orders : <span className='px-[20px] py-[10px] bg-pink-100 text-black rounded-lg flex items-center justify-center border-[1px]'>
                    {totalOrders}
                  </span>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Home