import React from 'react'
import Title from './Title'
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { TbCircleCheckFilled } from "react-icons/tb";
import { MdContactSupport } from "react-icons/md";

function OurPolicy() {
  return (
    //  we create three box 
    <div className='lg:w-[99vw] w-[100vw]  h-[100vh] md:h-[70vh] flex items-center justify-start flex-col bg-slate-600 gap-[50px]'>
     <div className='h-[8%] w-[100%] text-center mt-[70px] '>
     <Title text1={"Our"} text2={"Policy"}/>
     <p className='w-[100%] m-auto text-[13px] md:text-[20px] text-blue-100'>
        We protect customer data, ensuring secure storage, confidentiality, and responsible usage at all times.
     </p>
     </div>

     <div className='w-[100%] md:min-h-[50%] h-[20%] flex items-center justify-center flex-wrap lg:gap-[50px] gap-[80px]'>
      <div className='w-[400px] max-w-[90%] h-[606] flex items-center flex-col gap-[10px] '>
            <MdOutlineCurrencyExchange className='md:[30px] w-[30px] h-[30px] md:h-[60px] text-purple-300'/>
        
        <p className='font-semibold md:text-[25px] text-[19px] text-yellow text-center'>Easy Exchange Plolicy</p>
       <p  className= 'font-semibold md:text-[18px] text-[12px] text-yellow text-center'> Customers may return unused products within the return window following stated guidelines.</p>
      </div>

       <div className='w-[400px] max-w-[90%] h-[606] flex items-center flex-col gap-[10px] '>
            <TbCircleCheckFilled className='md:[30px] w-[30px] h-[30px] md:h-[60px] text-purple-300'/>
        
        <p className='font-semibold md:text-[25px] text-[19px] text-yellow text-center'>Shipping Policy:</p>
       <p  className= 'font-semibold md:text-[18px] text-[12px] text-yellow text-center'> Orders are shipped promptly with tracking details shared once dispatch is completed successfully.</p>
      </div>

       <div className='w-[400px] max-w-[90%] h-[606] flex items-center flex-col gap-[10px] '>
            <MdContactSupport className='md:[30px] w-[30px] h-[30px] md:h-[60px] text-purple-300'/>
        
        <p className='font-semibold md:text-[25px] text-[19px] text-yellow text-center'>Customer Support</p>
       <p  className= 'font-semibold md:text-[18px] text-[12px] text-yellow text-center'> All payments are securely processed through trusted gateways ensuring safe and encrypted transactions.</p>
      </div>

     </div>

    </div>
  )
}

export default OurPolicy