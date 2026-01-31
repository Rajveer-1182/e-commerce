import React, { useContext } from 'react'
import { ShopDataContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'

function Card({name,image, id , price,deatil,size}) {
  let {currency} = useContext(ShopDataContext)
  let navigate = useNavigate();


  return (
    <div className='w-[250px] max-w-[44%] h-[350px] bg-gray-100 backdrop:blur-lg rounded-lg object-cover flex items-start justify-start flex-col p-[2px] border-[5px]  shadow-black/100  border border-white/100 active:transition-all duration-500 ease-in-out  hover:-translate-y-2 active:hover:shadow-black/50' 
    >
    <img src={image} alt="" 
   
    className='w-[100%] h-[70%] cursor-pointer rounded-sm transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-lg'/>
   
     <div className='flex mt-[10px] gap-[10px]'>
      <div className='ml-[5px]'>
                 <div className='text-[14px] font-semibold  text-purple-500 text-sm'>{name}</div> 
     <div className='text-[18px]'>{currency}{price}</div>
    
      <p className='text-slate-600 '>Rating {4.3}</p>
      </div>
   
         <button className=' flex items-center justify-center h-[35px] lg:h-[40px] w-[80px] lg:w-[100px]  font-semibold  bg-red-300 mt-[25px] cursor-pointer lg:ml-[30px] ml-[15px] rounded-xl transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-lg'
          onClick={() => navigate(`/productDetail/${id}`)}
         >
      Add to cart
     </button>
      </div>
   

    </div>
  )
}

export default Card