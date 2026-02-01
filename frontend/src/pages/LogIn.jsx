import React from 'react'
import './auth-responsive.css';
import { useNavigate } from 'react-router-dom'

import google from '../assets/google.jpg'
import { useContext } from 'react';
import { authcontext } from '../context/Authcontext';
import { useState } from 'react';
import axios from 'axios';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../utils/Firebase';
import { toast } from 'react-toastify';
import back from '../assets/loginBackground.avif'


const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { saveUrl } = useContext(authcontext);
  const Navigate = useNavigate();


  const handleSingIn = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(saveUrl + '/api/auth/login', {
        email, password
      }, { withCredentials: true });
      console.log(result.data);
       toast.success("User Logged in success")
      Navigate("/")
    } catch (error) {
      console.error("Error in handleSingIn:", error.response ? error.response.data : error.message);
    toast.error("user Not Logged In")
    }
  };

  const googlelogIn = async (e) => {
    e.preventDefault();
    try {
      const response = await signInWithPopup(auth, provider);
      let user = response.user;
      let name = user.displayName;
      let email = user.email;
      console.log(user);
      const result = await axios.post(saveUrl + "/api/auth/googlelogin", {
        name, email
      }, {
        withCredentials: true
      });
      console.log(result.data);
      toast.success("google login Success")
    } catch (error) {
      toast.success("google Login failed")
      console.log("error in the googleAuth" + error);
    }
  };
//  
  return (
<div className="
  w-full min-h-screen flex flex-col lg:flex-row
  bg-gradient-to-br from-slate-800 via-slate-300 via-slate-100 to-slate-600
  items-center justify-center gap-12
">

  {/* RIGHT AUTH CARD */}
  <div className="
    w-full  sm:w-[90%] md:w-[70%] lg:w-[50%] max-w-[420px]  rounded-xl shadow-xl p-6 sm:p-8
       shadow-black/30  border border-white/20 transition-all duration-300 ease-in-out  hover:-translate-y-2 hover:shadow-black/50">
    <h2 className="text-2xl font-semibold text-slate-800 text-center">
      Sign in to your account
    </h2>

    {/* Google Login */}
    <button
      onClick={googlelogIn}
      className="
        w-full mt-6 flex items-center justify-center gap-3 border border-slate-300 py-2.5 rounded-md hover:bg-slate-50  transition
      "
    >
      <img src={google} alt="google" className="w-5 h-5" />
      <span className="text-sm font-medium text-slate-700">
        Continue with Google
      </span>
    </button>

    {/* Divider */}
    <div className="flex items-center gap-3 my-6">
      <hr className="flex-grow border-slate-300" />
      <span className="text-xs text-slate-500 font-medium">OR</span>
      <hr className="flex-grow border-slate-300" />
    </div>

    {/* Form */}
    <form className="flex flex-col gap-5" onSubmit={handleSingIn}>
      <input
        type="email"
        placeholder="Email address"
        className="
          w-full px-3 py-2.5
          border border-slate-300 rounded-md
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
          w-full px-3 py-2.5  border border-slate-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
        "
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        className="
          mt-2 bg-blue-600  text-white py-2.5 rounded-md  font-medium hover:bg-blue-700  transition
        "
      >
        Sign In
      </button>
    </form>

    {/* Footer */}
    <p className="mt-6 text-center text-sm text-slate-600 font-bold">
      Don’t have an account?
      <span
        className="ml-1 text-blue-600 font-medium cursor-pointer hover:underline"
        onClick={() => Navigate("/registration")}
      >
        Register
      </span>
    </p>
  </div>

    {/* LEFT CONTENT */}
  <div className="w-full lg:w-[45%] text-center lg:text-left  ">
    <h1 className="text-3xl sm:text-4xl cursor-pointer lg:text-5xl font-semibold text-slate-800 leading-tight shadow-black/30  transition-all duration-300 ease-in-out  hover:-translate-y-2 hover:shadow-black/50">
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
   
    <p className='mt-4 text-base text-5xl text-slate-600 font-bold'>@admin Panel</p>
  </div>


  
  
</div>
 
  )
}

export default LogIn;
