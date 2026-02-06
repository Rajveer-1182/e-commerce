import React from 'react'
import Nav from '../Components/Nav'
import SideBar from '../Components/SideBar'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthDataContext } from '../context/AuthContext'
import axios from 'axios'
import { useEffect } from 'react'

function List() {
 // create usestate it have may list so we empty arrar
  let [list ,setList] =  useState([])
  // create serverUrl for fetching list
 let {serverUrl}  = useContext(AuthDataContext)
 // create a function with name fetch list
 const fetchList = async ()=>{
  try {
    // we create api in the backend then we get from there,
      let result = await axios.get(serverUrl +"/api/product/list")
      setList(result.data)
      console.log(result.data)
  } catch (error) {
    console.log(error)
  }
 }

 // for remove the list we create a function  we wite server Url beacuse we provide the id for which data has benn dalet
 const removeList = async (id)=>{
     
  try {
    let   result  = await axios.post(`${serverUrl}/api/product/remove/${id}`,{},{
      withCredentials:true
    })

    if(result.data){
      fetchList()
    }
    else{
      console.log("failed to remove product")
    }
  } catch (error) {
    console.log(error)
  }
 }

// we create hooks like sue effesct for multiple times run

 useEffect(()=>{
  fetchList()
 },[])



  return (
    <div className='w-[99vw] min-h-[100vh]    text-white '>
   <Nav/>
   <div className='w-[100%] h-[100%] flex items-center justify-start'>
  <SideBar/>

  <div className='w-[82%] h-[100%] lg:ml-[320px] md:ml-[230px] mt-[70px] flex flex-col gap-[30px]  overflow-x-hidden  py-[50px] ml-[100px]'>
   <div className='w-[400px] h-[50px] text-[28px] md:text-[40px] text-white font-semibold'>
    All Listed product
   </div>


 {
  list.length > 0 ? (
    list.map((item, index) => (
      <div className='w-[90%] h-[90px] md:h-[120px] bg-slate-600 rounded-xl flex items-center justify-start gap-[5px] md:gap-[30px] p-[10px] md:px-[30px]' 
       key={index}
      >
        <img src={item.image1}  className='w-[30%] md:w-[120px] h-[90%] rounded-lg ' alt="" />
        <div className='w-[90%] h-[80%] flex flex-col items-start justify-center gap-[2px] '>
          <div className='w-[100%] md:text-[20px] text-[15px] text-red'>
           {item.name}
          </div>

          <div className='md:text-[17px] text-[15px] text-red'>
            {item.category}
          </div>

          
          <div className='md:text-[17px] text-[15px] text-red'>
            ${item.price}
          </div>

        </div>

        <div className='w-[10%] h-[100%] bg-transparent flex items-center justify-center'>
             <span className='w-[35px] h-[30px] flex items-center justify-center rounded-md md:hover:bg-red-300  md:hover:text-green-300 cursor-pointer'
             onClick={()=>{
              removeList(item._id)
             }}
             >X</span>
        </div>


      </div>
    ))
  ) : (
    <div className="text-black text-lg">No Product Available.</div>
  )
}

  </div>
   </div >

    </div>
  )
}

export default List