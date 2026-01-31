import React from 'react'
import { FaCircle } from "react-icons/fa";
import Background from './Background';
import { useNavigate } from 'react-router-dom';

function Hero({heroData,heroCount, setHeroCount }) {
  
  let navigate = useNavigate()

  return (
     
  <div className="w-full flex flex-col lg:flex-row items-center 
                min-h-[70vh] 
                bg-gradient-to-r from-indigo-50 via-white to-cyan-50 
                px-6 lg:px-16 gap-10">

  {/* TEXT SECTION */}
  <div className="w-full lg:w-1/2 text-center lg:text-left mt-2">
    
    <h1 className="font-poppins font-semibold 
                   text-3xl md:text-4xl lg:text-5xl 
                   text-slate-900 leading-tight">
      {heroData?.text1}
    </h1>

    <p className="mt-4 text-base md:text-lg 
                  text-slate-600 leading-relaxed">
      {heroData?.text2}
    </p>


   <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 
                       text-white px-8 py-3 rounded-lg 
                       text-sm md:text-base font-medium 
                       transition-all"
                       onClick={()=>{
                          navigate("/collection")
                       }}
                       >
      Shop Now
    </button>
    
    </div>

             <Background heroCount={heroCount}/>
   <div className='absolute  lg:top-[83%] lg:left-[20%] md:top-[50%] top-[75%] left-[15%] flex items-center justify-center gap-[10px] font-bold '>
  <FaCircle  className={`w-[14px] ${heroCount === 0 ? "fill-orange-400 " :"fill-white"}`} onClick={()=> setHeroCount(0)}/>
  <FaCircle  className={`w-[14px] ${heroCount === 1 ? "fill-orange-400 " :"fill-white"}`} onClick={()=> setHeroCount(1)}/>
  <FaCircle className={`w-[14px] ${heroCount === 2 ? "fill-orange-400 " :"fill-white"}`} onClick={()=> setHeroCount(2)}/>
 </div>

    </div>
  )
  
}

export default Hero