import React from 'react'
import hero1 from "../assets/hero7.avif"
import hero2 from "../assets/hero2.webp"
import hero3 from "../assets/hero3.webp"
import hero5 from '../assets/hero5.avif'
import hero6 from '../assets/hero6.webp'
// import hero7 from '../assets/hero7.avif'


const Background = ({heroCount}) => {

  if (heroCount === 0) {
    return <div className="w-full flex items-center justify-center md:mt-32 lg:mt-5">
  <img src={hero2}
   className="lg:h-90  md:h-140 md:w-150 h-80 w-130 object-contain" />
<img src={hero1} alt="" className='lg:h-80 lg:w-[35%] hidden md:h-140 md:w-150 h-130 w-130 object-contain rounded-md' />
</div>

  } else if (heroCount === 1){
    return <div className="w-full flex items-center justify-center   md:mt-32 lg:mt-5 ">
  <img src={hero2}
   className="lg:h-90  md:h-140 md:w-150 h-80 w-130 object-contain" />
   <img src={hero5} alt="" className='lg:h-80 hidden lg:w-[35%] md:h-140 md:w-150 h-130 w-130 object-contain rou' />
</div>      
  }
  else if (heroCount === 2){
    return <div className="w-full flex items-center justify-center md:mt-32 lg:mt-5">
  <img src={hero3}
   className="lg:h-90 md:h-140 md:w-150  h-80 w-130 object-contain" />
<img src={hero6} alt="" className='lg:h-80 hidden lg:w-[35%] md:h-140 md:w-150 h-130 w-130 object-contain' />
</div>
  }
 
}

export default Background