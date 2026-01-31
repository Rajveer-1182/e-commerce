import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopDataContext } from '../context/ShopContext'
import Card from './Card'


function LatestCollection() {
 let{ products} = useContext(ShopDataContext)

 let [latestProduct , setLatestProduct] = useState([])



 useEffect(()=>{
   setLatestProduct(products.slice(0,8))
 },[products])


  return (
    <div>
       <div className='h-[5%] font-bold w-[100%] text-center md:mt-[50px] lg:mt-[20px] font-poppins  bg-white/100 backdrop-blur-md '>
         <Title  text1={"LATEST"} text2={"COLLECTIONS"}/>
         <p className='w-[100%] m-auto text-[13px] md:text-[20px] px-[10px] text-blue-400'> Step-Into new Collection - of the season</p>
       </div>

  {/*  we start the mapping the prodct in this div */}
    <div className='w-[100%] h-[50%] mt-[20px] flex items-center justify-center flex-wrap gap-[40px] '>
     {
      latestProduct.map((item , index)=>(
       <Card key={index} name={item.name} image={item.image1} id={item._id} price={item.price} />
      )) 
     }
    
    </div>

    </div>
  )
}

export default LatestCollection