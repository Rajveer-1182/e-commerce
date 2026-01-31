import React, { useContext, useState } from "react";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { ShopDataContext } from "../context/ShopContext";
import { IoHome } from "react-icons/io5";
import { MdCollections } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";


const Nav = () => {
  // const { userData } = useUserContext() || {};
  const navigate = useNavigate()
  const {showSearch, setShowSearch,search, setSearch,totalCount} = useContext(ShopDataContext)
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
<nav className="w-full fixed top-0 z-50 
                bg-white/80 backdrop-blur-md 
                border-b border-slate-200
                px-4 sm:px-6 lg:px-12">
  
  <div className="max-w-7xl   mx-auto  px-4 sm:px-6 lg:px-8  py-3  flex items-center justify-between ">
        {/* LOGO */}
        <div className="text-xl font-bold text-gray-100"
        onClick={()=>navigate("/home")} >
          OneCart
        </div>

        {/* MENU (HIDE ON MOBILE, SHOW ON DESKTOP) */}
        <ul className=" hidden md:flex gap-4 ">
          <li className="px-5 py-2 bg-gray-800 text-white rounded-full cursor-pointer hover:bg-gray-700"
          onClick={()=>navigate("/home")}
          >
            Home
          </li>
          <li className="px-5 py-2 bg-gray-800 text-white rounded-full cursor-pointer hover:bg-gray-700"
          onClick={()=>navigate("/collection")}
          >
            Collections
          </li>
          <li className="px-5 py-2 bg-gray-800 text-white rounded-full cursor-pointer hover:bg-gray-700"
          onClick={()=>navigate("/about")}
          >
            About
          </li>
          <li className="px-5 py-2 bg-gray-800 text-white rounded-full cursor-pointer hover:bg-gray-700"
          onClick={()=>navigate("/contact")}
          >
            Contact
          </li>
        </ul>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-5 relative">

          {/* SEARCH */}
         <button
  onClick={() => {
    setShowSearch(!showSearch);
    navigate("/collection");}}>
  <FiSearch className="text-2xl font-bold cursor-pointer" />
</button>


          {/* CART */}
          <div className=" relative">
            <FiShoppingCart className=" text-3xl cursor-pointer" 
             onClick={()=> navigate("/cart")}
            />
            <span className="  absolute -top-2 -right-2  bg-white text-sm h-5 w-5 flex items-center justify-center rounded-full">
             {totalCount()}        
            </span>
          </div>

          {/* PROFILE */}
          <div className="relative">
            <button onClick={() => setShowProfile(!showProfile)}>
              <FiUser className=" text-3xl cursor-pointer" />
            </button>

            {showProfile && (
              <div className="absolute right-0 mt-3 w-40 bg-gray-800 text-white rounded-xl shadow-lg">
                <p className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                 onClick={()=> navigate("/order")}
                >
                  Orders
                </p>
                <p className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                // onClick={()=>{()=>navigate("/about");setShowProfile(false)}}
                 onClick={()=> navigate("/about")}
                >
                  About
                </p>
                <p className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                 onClick={()=> navigate("/login")}
                >
                  Login
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* SEARCH BAR */}
      {showSearch && (
        <div className="w-full flex justify-center pb-4">
          <input
            type="text"
            placeholder="Search Here"
            className="w-[90%] md:w-[60%] lg:w-[50%] px-6 py-3 rounded-full bg-gray-800 text-white outline-none"
             onChange={(e)=>{setSearch(e.target.value)}} value={search}
             />
        </div>
      )}
    </nav>

  <nav className="lg:hidden md:hidden fixed bottom-1  left-0 h-[6vh]  min-h-[50px] w-full bg-gray-100  flex items-center justify-around z-10 shadow-[0_-2px_10px_rgba(0,0,0,0.15)]">   
       <IoHome className="text-6xl " 
        onClick={()=> navigate('/home')}
     /> 

      <MdCollections className="text-6xl"
      onClick={()=> navigate('/collection')}
      />     
    
        <MdOutlineAccountCircle className="text-6xl"
        onClick={() => setShowProfile(!showProfile)}
             
        />

         {showProfile && (
              <div className="absolute right-20 -mt-45 w-50 text-green-300 rounded-xl shadow-lg bg-gray-500   transition-colors duration-200 hover:bg-gray-600">
                <p className="px-4 py-2  cursor-pointer  transition-all"
                 onClick={()=> navigate("/order")}
                >
                  Orders
                </p>
                <p className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                // onClick={()=>{()=>navigate("/about");setShowProfile(false)}}
                 onClick={()=> navigate("/about")}
                >
                  About
                </p>
                <p className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                 onClick={()=> navigate("/login")}
                >
                  LogIn
                </p>
              </div>
            )}
    
     <div>
        <TiShoppingCart className="text-6xl"
     onClick={()=> navigate('/cart')}       
     />
     <span className="  absolute -top-2  left-110  bg-red-300 text-md font-bold  h-8 w-8 flex items-center justify-center rounded-xl">
             {totalCount()}        
            </span>
     </div>
</nav>
    
    </>
  )
}

export default Nav