

import React, { useContext } from "react";
import { ShopDataContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

function Card({ name, image, id, price, detail, size }) {
  const { currency } = useContext(ShopDataContext);
  const navigate = useNavigate();

  return (
//     <div
//       className="
//       w-[280px] 
//       bg-white 
//       rounded-2xl 
//       overflow-hidden
//       shadow-md
//       hover:shadow-xl
//       transition-all 
//       duration-300 
//       hover:-translate-y-2
     
//     "
//     >
//       {/* Product Image */}
//      <div className="w-full h-[220px] overflow-hidden rounded-t-2xl">
//   <img
//     src={image}
//     alt={name}
//     className="
//       w-full
//       h-full
//       transition-transform
//       duration-300
//       hover:scale-102
//     "
//   />
// </div>

//       {/* Product Info */}
//       <div className="p-2 flex flex-col gap-1">

//         {/* Product Name */}
//         <h3 className="text-md font-semibold text-gray-800 line-clamp-1">
//           {name}
//         </h3>

//         {/* Price */}
//         <p className="text-lg font-bold text-indigo-600">
//           {currency}{price}
//         </p>

//         {/* Rating */}
//         <p className="text-sm text-gray-500">
//           ⭐ 4.3 Rating
//         </p>

//         {/* Button */}
//         <button
//           onClick={() => navigate(`/productDetail/${id}`)}
//           className="
//           mt-2
//           w-full
//           py-2
//           bg-gradient-to-r
//           from-indigo-500
//           to-purple-500
//           text-white
//           font-semibold
//           rounded-lg
//           shadow-md
//           hover:shadow-lg
//           hover:scale-[1.02]
//           active:scale-95
//           transition-all
//           duration-300
//           cursor-pointer
//           "
//         >
//           Add to Cart
//         </button>

//       </div>
//     </div>

<div
  className="
  w-full sm:w-[48%] md:w-[30%] lg:w-[23%]
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
  {/* Image */}
  <div className="w-full h-[180px] sm:h-[200px] md:h-[220px] overflow-hidden">
    <img
      src={image}
      alt={name}
      className="w-full h-full object-cover hover:scale-105 transition"
    />
  </div>

  {/* Info */}
  <div className="p-3 flex flex-col gap-1">

    <h3 className="text-sm sm:text-md font-semibold text-gray-800 line-clamp-1">
      {name}
    </h3>

    <p className="text-base sm:text-lg font-bold text-indigo-600">
      {currency}{price}
    </p>

    <p className="text-xs sm:text-sm text-gray-500">
      ⭐ 4.3 Rating
    </p>

    <button
      onClick={() => navigate(`/productDetail/${id}`)}
      className="
      mt-2
      w-full
      py-2 sm:py-2.5
      text-sm sm:text-base
      bg-gradient-to-r from-indigo-500 to-purple-500
      text-white
      font-semibold
      rounded-lg
      shadow-md
      hover:shadow-lg
      hover:scale-[1.02]
      active:scale-95
      transition
    "
    >
      Add to Cart
    </button>

  </div>
</div>
  );
}

export default Card;