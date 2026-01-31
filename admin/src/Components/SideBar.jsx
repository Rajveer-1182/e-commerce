import React from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaListUl } from "react-icons/fa6";
import { SiTicktick } from "react-icons/si";
import { useNavigate } from 'react-router-dom';

function SideBar() {

  let navigate = useNavigate()

  return (
    <div className='w-[18%] min-h-[100vh] border-r-[1px] py-[60px] fixed left-0 top-0'>
     <div className='flex flex-col gap-4 pt-[40px] pl-[20%] text-[15px]'>
    
      <div className='flex items-center justify-center md:justify-start gap-3 border-gray-200 border-r-0 px-2 bg-white text-black py-2 cursor-pointer hover:bg-red-200'
      onClick={()=>navigate("/add")}
      >
   < IoMdAddCircleOutline  className='w-[30px] h-[20px]'/>
    <p className='hidden md:block'>Add Items</p> 
      </div>

       <div className='flex items-center justify-center md:justify-start gap-3 border-gray-200 border-r-0 px-2 bg-white text-black py-2 cursor-pointer hover:bg-red-200'
        onClick={()=>navigate("/list")}
       >
   <FaListUl   className='w-[30px] h-[20px]'/>
    <p className='hidden md:block'>List Items</p> 
      </div>

       <div className='flex items-center justify-center md:justify-start gap-3 border-gray-200 border-r-0 px-2 bg-white text-black py-2 cursor-pointer hover:bg-red-200'
        onClick={()=>navigate("/orders")}
       >
   < SiTicktick  className='w-[30px] h-[20px]'/>
    <p className='hidden md:block'>View orders</p> 
      </div>


     </div>
    </div>
  )
}

export default SideBar