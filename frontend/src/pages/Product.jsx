import React from 'react'
import LatestCollection from '../component/LatestCollection'
import BestSeller from '../component/BestSeller'

function Product() {
  return (
    <div className='w-full bg-white  min-h-[100vh] flex items-center justify-start flex-col '>
      
       <div className='w-[100%] min-h-[70px] flex items-center justify-center flex-col'>
        <LatestCollection/>
       </div>

         <div className='w-[100%] min-h-[70px] flex items-center justify-center  flex-col'>
        <BestSeller/>
       </div>
    </div>
  )
}

export default Product