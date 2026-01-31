import React from 'react'
import Title from '../component/Title'
import about from '../assets/About.webp'
import NewLetterBox from '../component/NewLetterBox'

function About() {
  return (
    <div className='lg:w-[99vw] w-[100vw] md:w-[100vw] min-h-[100vh] flex items-center justify-center flex-col bg-slate-600 gap-[5px] pt-[0px lg:mt-[30px]'>
    <Title text1={"About "} text2={"Us"} />
    <div className='w-[100%]  flex items-center justify-center flex-col lg:flex-row'>
      
      <div className='lg:w-[50%] w-[100%] flex items-center justify-center'>
        <img src={about} alt=""  className='lg:w-[85%] w-[80%]  shadow-md shadow-black rounded-sm shadow-black/30  transition-all duration-600 ease-in-out hover:-translate-y-2 hover:shadow-black/50' />
      </div>

      <div className='lg:w-[50%] w-[80%] flex items-start justify-center gap-[20px] flex-col mt-[20px] lg:mt-[0px] '>
    <p className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]'>Welcome to our e-commerce platform, where we offer a wide range of products at competitive prices. Our mission is to provide an exceptional shopping experience for all our customers.</p>
    <p className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]'>
     A modern shop offers a seamless shopping experience with stylish design, easy navigation, secure payments, fast delivery, and reliable customer support. It focuses on quality products, transparent pricing, smooth checkout, and mobile-friendly access,
    </p>

    <p className='lg:w-[80%] w-[100%] text-[white] lg:text-[18px] text-[15px] mt-[10px] font-bold text-pink-300'>
   OUR MISSION
    </p>

    <p className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]'>
  Our mission is to deliver high-quality products through a modern, reliable, and customer-focused shopping experience. We aim to build trust with secure payments, fast delivery, and responsive support, while continuously
    </p>
      </div>
    </div>
  {/*  Why Choose Us div */}
    <div className='w-[100%] flex items-center justify-center flex-col lg:mt-[15px] '>
     <Title text1={"WHY "} text2={" CHOOSE US"} />
       <div className='w-[80%] flex items-center justify-center lg:flex-row flex-col py-[40px] gap-[10px]'>

       <div className='lg:w-[33%] w-[90%] lg:h-[250px] md:h-[300px] h-[250px] border-[2px] border-gray-300 flex items-ceneter justify-center gap-[20px] flex-col px-[40px] py-[10px] text-[white] backdrop-blur-[2px] bg-slate-600'>

         <b className='text-[20px] font-semibold text-blue-300'> Quality Assurance</b>
       <p>We ensure strict quality checks, reliable sourcing, and careful packaging to deliver trusted, high-standard products every time.
        We ensure strict quality checks, reliable sourcing, and careful packaging to deliver trusted, high-standard products every time.
       </p>
       </div>

         <div className='lg:w-[33%] w-[90%] lg:h-[250px] md:h-[300px] h-[270px] border-[2px] border-gray-300 flex items-ceneter justify-center gap-[20px] flex-col px-[40px] py-[10px] text-[white] backdrop-blur-[2px] bg-slate-600'>

         <b className='text-[20px] font-semibold text-blue-300'> Convience</b>
       <p>Convenience is at the heart of our service, offering easy navigation, quick search, secure checkout, flexible payment options, fast delivery, and hassle-free returns. Our platform is designed to save time, reduce effort, and provide a smooth, enjoyable shopping experience anytime, anywhere, across all devices. </p>
       </div>

         <div className='lg:w-[33%] w-[90%] lg:h-[250px] md:h-[300px] h-[300px] border-[2px] border-gray-300 flex items-ceneter justify-center gap-[20px] flex-col px-[40px] py-[10px] text-[white] backdrop-blur-[2px] bg-slate-600'>

         <b className='text-[20px] font-semibold text-blue-300'> Exceptional Customer Service</b>
      <p>Exceptional customer service is our priority. We listen carefully, respond quickly, and provide helpful solutions at every step of your journey. Our dedicated support team ensures clear communication, timely assistance, and a friendly experience, building trust and long-term relationships with every customer.</p>
       </div>
       
         </div>  
    </div>

     {/* letter box */}
     <NewLetterBox/>

    </div>
  )
}

export default About