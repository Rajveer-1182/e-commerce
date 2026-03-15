// import React, { useContext } from 'react'
// import { ShopDataContext } from '../context/ShopContext'
// import { useNavigate } from 'react-router-dom'

// function Card({name,image, id , price,deatil,size}) {
//   let {currency} = useContext(ShopDataContext)
//   let navigate = useNavigate();


//   return (
//     <div className='w-[280px] max-w-[45%] h-[320px] bg-gray-300 backdrop:blur-lg rounded-lg object-cover flex items-start justify-start flex-col p-[2px] border-[5px] rounded-lg shadow-black/100  border border-white/100 active:transition-all duration-500 ease-in-out  hover:-translate-y-2 active:hover:shadow-black/50' 
//     >
//     <img src={image} alt="" 
   
//     className='w-[100%] h-[70%] cursor-pointer rounded-sm transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-lg'/>
   
//      <div className='flex mt-[10px] gap-[10px]'>
//       <div className='ml-[5px]'>
//                  <div className='lg:text-[14px] font-semibold  text-purple-500 text-sm'>{name}</div> 
//      <div className='text-[18px]'>{currency}{price}</div>
    
//       <p className='text-slate-600 '>Rating {4.3}</p>
//       </div>
   
//         <button
//   className="
//     flex items-center justify-center
//     h-11 lg:w-30 w-22
//     bg-gradient-to-r from-indigo-400 to-purple-400
//     text-white font-semibold
//     rounded-xl
//     shadow-md
//     mt-5
//     ml-3
//     lg:ml-[60px]
//     transition-all duration-300 ease-out
//     hover:scale-[1.03]
//     hover:shadow-xl
//     active:scale-95
//     cursor-pointer
//   "
//    onClick={() => navigate(`/productDetail/${id}`)}
// >
//   Add to Cart
// </button>

//       </div>
   

//     </div>
//   )
// }

// export default Card

import React, { useContext } from "react";
import { ShopDataContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

function Card({ name, image, id, price, detail, size }) {
  const { currency } = useContext(ShopDataContext);
  const navigate = useNavigate();

  return (
    <div
      className="
      w-[280px] 
      bg-white 
      rounded-2xl 
      overflow-hidden
      shadow-md
      hover:shadow-xl
      transition-all 
      duration-300 
      hover:-translate-y-2
     
    "
    >
      {/* Product Image */}
     <div className="w-full h-[220px] overflow-hidden rounded-t-2xl">
  <img
    src={image}
    alt={name}
    className="
      w-full
      h-full
      transition-transform
      duration-300
      hover:scale-102
    "
  />
</div>

      {/* Product Info */}
      <div className="p-2 flex flex-col gap-1">

        {/* Product Name */}
        <h3 className="text-md font-semibold text-gray-800 line-clamp-1">
          {name}
        </h3>

        {/* Price */}
        <p className="text-lg font-bold text-indigo-600">
          {currency}{price}
        </p>

        {/* Rating */}
        <p className="text-sm text-gray-500">
          ⭐ 4.3 Rating
        </p>

        {/* Button */}
        <button
          onClick={() => navigate(`/productDetail/${id}`)}
          className="
          mt-2
          w-full
          py-2
          bg-gradient-to-r
          from-indigo-500
          to-purple-500
          text-white
          font-semibold
          rounded-lg
          shadow-md
          hover:shadow-lg
          hover:scale-[1.02]
          active:scale-95
          transition-all
          duration-300
          cursor-pointer
          "
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
}

export default Card;