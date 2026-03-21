

import React, { useContext } from "react";
import { ShopDataContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

function Card({ name, image, id, price, detail, size }) {
  const { currency } = useContext(ShopDataContext);
  const navigate = useNavigate();

  return (
    <div
      className="
      lg:w-[240px]
      w-[187px] 
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