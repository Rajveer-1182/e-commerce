import React from 'react'
import Title from '../component/Title'
import Contact1 from '../assets/Contact1.jpeg'
import NewLetterBox from '../component/NewLetterBox'

function Contact() {
  return (
    <div className='lg:w-[99vw] w-[100vw] md:w-[100vw] min-h-[100vh] flex items-center justify-center flex-col bg-slate-600 gap-[50px] pt-[80px]'>
     <Title text1={"CONTACT "} text2={"US"}/>
     <div className='w-[100%] flex items-center justify-center flex-col lg:flex-row'>
        
      <div className='lg:w-[50%] w-[100%] flex items-center justify-center'>

        <img src={Contact1} alt=""  className='lg:w-[70%] w-[80%]  shadow-md shadow-black rounded-sm flex items-center justify-center'/>
      </div>

      <div className='lg:w-[50%] w-[80%] flex items-start justify-center gap-[20px] flex-col mt-[20px] lg:mt-[0px]'>
           <p className='lg:w-[80%] w-[100%] text-[white] font-bold lg:text-[18px] text-[15px]'>
           OUR STORE</p>

         <p className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]'>
         
                  <p>12345,Random city station</p>
                  <p>Email: admin@onecart.com</p>
         </p>

         <p className='lg:w-[80%] w-[100%] text-[white] font-bold lg:text-[18px] text-[15px]'>
           Shopping Hours at One Cart
         </p >

         <p className='lg:w-[80%] w-[100%] text-[white] font-bold lg:text-[18px] text-[13px]'>
                 Learn More About Our Store Hours about our job openning
         </p>

         <button className='px-[30px] py-[20px] flex items-center justify-center text-white bg-transparent border active:bg-slate-600 rounded-md cursor-pointer hover:bg-purple-700 border-[1px] shadow-sm shadow-black mt-5'>
            Explore Jobs
         </button>
      </div>
     </div>

     <NewLetterBox/>
    </div>
  )
}

export default Contact