import React from 'react'
import beaut from "../assets/mobile.avif"
import electro from "../assets/electro.png"
import fashion from "../assets/fashionn.webp"
import tv from "../assets/tvv.avif"
import flight from "../assets/flightt.avif"
import food from "../assets/food.png"
import { FaChevronCircleDown } from "react-icons/fa";
import Card1 from '../component/Card1'

const categories = [
  {
    name: "Mobiles",
    img: beaut,
    types: [
      "Smartphones",
      "5G Phones",
      "Budget Phones",
      "Gaming Phones",
      "Foldable Phones",
      "Bluetooth Devices",
      "Screen Guards",
      "Mobile Covers",
      "Phone Stands",
      "Wireless Chargers",
      "Selfie Sticks",
      "Mobile Holders"
    ]
  },

  {
    name: "Fashion",
    img: fashion,
    types: [
      "Men's Top Wear",
      "Men's Bottom Wear",
      "Women's Ethnic Wear",
      "Belts",
      "Caps & Hats",
      "Jewellery",
      "Winter Wear",
      "Summer Wear",
      "Nightwear",
      "Activewear",
      "Innerwear",
      "Traditional Wear"
    ]
  },

  {
    name: "Electronics",
    img: electro,
    types: [
      "Laptops",
      "Gaming Laptops",
      "Desktops",
      "Monitors",
      "Keyboards",
      "Mouse",
      "Power Banks",
      "UPS",
      "Routers",
      "Networking Devices",
      "Smart Devices",
      "Smart Watches"
    ]
  },

  {
    name: "TVs",
    img: tv,
    types: [
      "Smart TVs",
      "Android TVs",
      "LED TVs",
      "OLED TVs",
      "QLED TVs",
      "4K Ultra HD TVs",
      "Wall Brackets",
      "TV Covers",
      "Blu-ray Players",
      "Media Players",
      "Projectors",
      "Projector Screens"
    ]
  },

  {
    name: "Flight",
    img: flight,
    types: [
      "Sofas",
      "Beds",
      "Dining Tables",
      "Wardrobes",
      "TV Units",
      "Coffee Tables",
      "Folding Furniture",
      "Stools",
      "Benches",
      "Cupboards"
    ]
  },

  {
    name: "Grocery",
    img: food,
    types: [
      "Fruits",
      "Vegetables",
      "Dairy Products",
      "Bakery Items",
      "Breakfast Cereals",
      "Instant Food",
      "Frozen Food",
      "Sweets",
      "Chocolates",
     
    ]
  }
];


const Home1 = () => {
  return (
    <div className="w-full   min-h-[40px]  bg-white border-b border-slate-200  flex items-center  px-4 sm:px-6 lg:px-12 lg:mt-10 mt-10">
      <div className="lg:w-full w-[100%] grid grid-cols-6 mt-[40px]  gap-2 m-5">
        {categories.map((item, index) => (
          <div
            key={index}
            className="relative group w-20 lg:w-70 h-20 lg:h-20  flex flex-col items-center justify-center cursor-pointer gap-5"
          >
            <img
              src={item.img}
              className="h-10 lg:h-20 w-10 lg:w-15 bg-gray-300 rounded-[30%] object-cover "
            />

            <p className="hidden md:flex text-xl  font-semibold">
              {item.name}
              <FaChevronCircleDown />
            </p>

            {/* Hover Dropdown */}
            <Card1  items={item.types} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home1;
