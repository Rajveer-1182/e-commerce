import React, { useContext } from 'react'
import { ShopDataContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'

function Card({name,image, id , price,deatil,size}) {
  let {currency} = useContext(ShopDataContext)
  let navigate = useNavigate();


  return (
    <div className='w-[280px] max-w-[45%] h-[320px] bg-gray-300 backdrop:blur-lg rounded-lg object-cover flex items-start justify-start flex-col p-[2px] border-[5px] rounded-lg shadow-black/100  border border-white/100 active:transition-all duration-500 ease-in-out  hover:-translate-y-2 active:hover:shadow-black/50' 
    >
    <img src={image} alt="" 
   
    className='w-[100%] h-[70%] cursor-pointer rounded-sm transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-lg'/>
   
     <div className='flex mt-[10px] gap-[10px]'>
      <div className='ml-[5px]'>
                 <div className='lg:text-[14px] font-semibold  text-purple-500 text-sm'>{name}</div> 
     <div className='text-[18px]'>{currency}{price}</div>
    
      <p className='text-slate-600 '>Rating {4.3}</p>
      </div>
   
        <button
  className="
    flex items-center justify-center
    h-11 lg:w-30 w-22
    bg-gradient-to-r from-indigo-400 to-purple-400
    text-white font-semibold
    rounded-xl
    shadow-md
    mt-5
    ml-3
    lg:ml-[60px]
    transition-all duration-300 ease-out
    hover:scale-[1.03]
    hover:shadow-xl
    active:scale-95
    cursor-pointer
  "
   onClick={() => navigate(`/productDetail/${id}`)}
>
  Add to Cart
</button>

      </div>
   

    </div>
  )
}

export default Card