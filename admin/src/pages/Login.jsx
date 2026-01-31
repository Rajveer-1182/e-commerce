import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useContext } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { AuthDataContext } from '../context/AuthContext';
// import AdminContext from '../context/AdminContext';
import {AdminDataContext } from '../context/AdminContext'
import { toast } from 'react-toastify';
import Loading from '../Components/Loading';


function LogIn  () {

   let[show, setShow] = useState(false)
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

    const [loading ,setLoading] = useState(false)

     let {serverUrl}  = useContext(AuthDataContext) 
  const Navigate = useNavigate();
  let {adminData , getAdmin}  = useContext(AdminDataContext )
//   const context = useContext(AdminContext);
// console.log("AdminContext value:", context);
  let navigate = useNavigate()
  const handleSingIn = async (e) => {

    e.preventDefault();
    try {
      const result = await axios.post(serverUrl + '/api/auth/adminLogin', {
        email, password
      }, { withCredentials: true });
      console.log(result.data);
      toast.success("AdminLogin Successfully")
      getAdmin();
      navigate("/")
    } catch (error) {
     
     
      console.error("Error in handleSingIn:", error.response ? error.response.data : error.message);
    toast.error("Admin Login Failed")
    }
  }

  return (
   <div className="
     w-full min-h-screen bg-gradient-to-br from-slate-800 to-slate-200 flex flex-col lg:flex-row  items-center justify-center  px-6 py-12  gap-12
   ">
   
     {/* RIGHT AUTH CARD */}
     <div className="
       w-full  sm:w-[90%] md:w-[70%] lg:w-[50%] lg:h-[55vh] max-w-[420px]  rounded-xl shadow-xl p-6 sm:p-8 shadow-black/30  border border-white/20 transition-all duration-300 ease-in-out  hover:-translate-y-2 hover:shadow-black/50
     ">
       <h2 className="text-2xl font-semibold text-slate-800 text-center">
         Sign in to your admin account
       </h2>
   
       {/* Google Login */}
       {/* <button
         onClick={googlelogIn}
         className="
           w-full mt-6 flex items-center justify-center gap-3 border border-slate-300 py-2.5 rounded-md hover:bg-slate-50  transition
         "
       >
         <img src={google} alt="google" className="w-5 h-5" />
         <span className="text-sm font-medium text-slate-700">
           Continue with Google
         </span>
       </button> */}
   
       {/* Divider */}
       <div className="flex items-center gap-3 my-6 ">
         <hr className="flex-grow border-slate-300" />
         <span className="text-xs text-white font-medium">OR</span>
         <hr className="flex-grow border-slate-300" />
       </div>
   
       {/* Form */}
       <form className="flex flex-col gap-5 " onSubmit={handleSingIn}>
       
         <input
           type="email"
           placeholder="Email address"
           className="
             w-full px-3 py-2.5
             border border-slate-500 rounded-md
             outline-none
             focus:ring-2 focus:ring-blue-500
             focus:border-blue-500


           "
           value={email}
           onChange={(e) => setEmail(e.target.value)}
         />
   
         <input
           type="password"
           placeholder="Password"
           className="
             w-full px-3 py-2.5  border border-slate-500 rounded-md outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
           "
           value={password}
           onChange={(e) => setPassword(e.target.value)}
         />
   
         <button
           type="submit"
           className="mt-2 bg-blue-600  text-white py-2.5 rounded-md  font-medium hover:bg-blue-700  transition          "
         >
          {loading ? <Loading/> : "Password is incorrect"}
           Sign In
         </button>
       </form>
   
       {/* Footer */}
       <p className="mt-6 text-center text-sm text-slate-600 font-bold">
         Don’t have an account?
         <span  className="ml-1 text-blue-600 font-medium cursor-pointer hover:underline"  onClick={() => Navigate("/register")}
         >
           Register
         </span>
       </p>
     </div>
   
       {/* LEFT CONTENT */}
     <div className="w-full lg:w-[45%] text-center lg:text-left">
       <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-800 leading-tight">
         Welcome to our platform
       </h1>
   
       <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
         Thank you for registering with us. We’re excited to have you on board.
         Your account gives you access to a seamless shopping experience,
         exclusive offers, easy order tracking, and personalized recommendations.
       </p>
   
       <p className="mt-4 text-base text-slate-600">
         Sign in to continue and explore everything we’ve built for you.
       </p>
      
       <p className='mt-4 text-base text-slate-600 font-bold'>@admin Panel</p>
     </div>
   
   
     
     
   </div>
  )
}

export default LogIn