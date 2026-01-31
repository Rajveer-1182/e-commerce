import React from 'react'
import logo from '../assets/mainlogo.jpeg'

function Footer() {
  return (
    <div className='w-[100%] md:h-[36vh] h-[20vh] bg-slate-800 h-[30%]'>
     <div className='w-[100%] md:h-[30vh]  h-[25vh] flex items-center justify-start md:px-[50px] px-[10px]'>
           {/* this the main div for our 3 type of object */}
         <div className='md:w-[30%] w-[40%] h-[100%] lg:flex items-start justify-center lg:flex-col'>
          <div className='lg:flex items-start justify-center  mt-[30px] md:mt-[40px] gap-[10px]'>
              <img src={logo} alt="" className='md:w-[40px] md:h-[40px] w-[100px] h-[50px]' />
              <p className='text-[19px] md:text-[20px] text-[black] '>One cart</p>
               </div>
             <p className='text-[15px]  text-[black]  text-gray-300 hidden md:block'>We ensure secure payments, fast delivery, easy returns, data privacy protection, and reliable customer support for all shoppers.</p>
             <p className='text-[15px]  text-[black] text-gray-300 lg:hidden '>Our e-commerce platform for customers.</p>
          </div>


          <div className='md:w-[25%] lg:w-[100%] ml-[20px]   h-[100%] flex items-center justify-center flex-col lg:flex-row text-center '>
            <div className='flex lg:flex-col flex-col  items-center justify-center gap-[5px]  md:mt-[40px]'>
             <p className='text-[16px]  md:text-[20px] font-bold  text-gray-200 md:block cursor-pointer'>
                     COMPANY 
                       </p>
                <ul>
                    <li className='text-[15px] text-gray-200  md:block cursor-pointer'>Home</li>
                    <li className='text-[15px] text-gray-200  md:block cursor-pointer'>About</li>
                    <li className='text-[15px] text-gray-200  md:block cursor-pointer'>Delivery</li>
                    <li className='text-[15px] text-gray-200  md:block cursor-pointer'>Privacy Policy</li>
                </ul>
            </div>
             </div>
         
         <div className='w-[30%] h-[100%]  ml-[30px] flex items-center justify-center flex-col text-center '>
             <div className='flex lg:flex-col  items-center justify-center gap-[5px] md:mt-[40px]'>
             <p className='text-[16px] font-bold md:text-[20px] text-gray-200 md:block cursor-pointer'>
                    GET IN TOUCH
                       </p>
                      </div>
                        <ul>
                    <li className='text-[15px] text-gray-200  md:block cursor-pointer'>+9198889432534</li>
                    <li className='text-[15px] text-gray-200  md:block cursor-pointer'>Patel Nagar road</li>
                    <li className='text-[15px] text-gray-200 md:block cursor-pointer'>contact@gmail.com</li>
                    <li className='text-[15px] text-gray-200  md:block cursor-pointer'>admin@gmail.com</li>
                </ul>
         </div>
     </div>

             
              <div className='w-[100%] h-[2px] bg-slate-600 '>
                <div className='w-[100%] h-[5vh] bg-gary-100 flex items-center text-[white] justify-center'>
                   Copy-All right reserved &copy; 2024 Rights Reserved
                </div>
        </div>
    </div>
  )
}

export default Footer