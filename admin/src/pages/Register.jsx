import React from 'react'
import {useNavigate} from 'react-router-dom'

function Register() {

  const navigate = useNavigate()
  return (
  <>
  <div  className='h-screen w-full bg-gradient-to-br from-slate-800 to-slate-200 lg:flex '>
      {/*  left div */}
    <div className='lg:w-[50%] w-[100%] lg:h-[100vh] h-[30vh] flex items-center justify-center p-[10px]'>
       

       <form action=" " className=" lg:h-[70%] h-[80%] w-[60%] bg-sl-500 m-[10px] lg:p-[50px] lg:m-[10px]  p-[50px] mt-[100px] rounded-4xl shadow-2xl shadow-black/30  border border-white/20 transition-all duration-300 ease-in-out  hover:-translate-y-2 hover:shadow-black/50 gap-[20px]">
         
              
       <h2 className="text-2xl underline  font-bold text text-center">
         Register in to your admin account
       </h2>
         
         <input type="text"
          // className='bg-gray-400 lg:mt-[20px] lg:text-2xl text-center flex h-[30px] w-[150px]  lg:h-[40px] lg:w-[350px] lg:p-[10px] font-semibold rounded-md'
         className='  w-full px-3 py-2.5 text-xl font-semibold border border-slate-500 rounded-md  outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mt-[20px]'
         placeholder='Enter your name' />


         <input type="text"
          // className='bg-gray-400 lg:mt-[10px] lg:text-2xl text-center flex h-[30px] w-[150px]  lg:h-[40px] lg:w-[350px] lg:p-[10px] font-semibold rounded-md'
             className='  w-full px-3 py-2.5 text-xl font-semibold border border-slate-500 rounded-md  outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mt-[20px]'
         placeholder='Enter your email' />

         <input type="text"
          className='  w-full px-3 py-2.5 text-xl font-semibold border border-slate-500 rounded-md  outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mt-[20px]'
       
      placeholder='Enter your phone no' />

         <input type="text"
          // className='bg-gray-400 lg:mt-[10px] lg:text-2xl text-center flex h-[30px] w-[150px]  lg:h-[40px] lg:w-[350px] lg:p-[10px] font-semibold rounded-md'
             className='  w-full px-3 py-2.5 text-xl font-semibold border border-slate-500 rounded-md  outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mt-[20px]'
       
         placeholder='Enter your name' />
         
      <h1 className='mt-[30px] text-xl font-semibold'>
        Already have an account <span 
          onClick={()=> navigate('/login')}
        className='text-green-300 font-bold underline cursor-pointer'>Login</span>
      </h1>

       </form>
    </div>

    {/* right div */}
    <div className='lg:w-[50%] w-[100%] h-[100vh] flex items-center justify-center'>
     <div>
           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-800 leading-tight">
         Welcome to our platform
       </h1>
   
       <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
         Thank you for registering with us. We’re excited to have you on board <br />
         Your account gives you access to a seamless shopping experience, <br />
         exclusive offers, easy order tracking, and personalized recommendations.
       </p>
   
       <p className="mt-4 text-base text-slate-600">
         Sign in to continue and explore everything we’ve built for you.
       </p>
      
       <p className='mt-4 text-base text-slate-600 font-bold'>@admin Panel</p>
  
     </div>
   </div>

    </div>
  </>
    
  )
}

export default Register