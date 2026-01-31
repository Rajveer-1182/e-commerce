import React, { useContext, useState } from 'react'
// const { saveUrl, getCurrentUser } = useContext(authcontext);

import './auth-responsive.css';
import { useNavigate } from 'react-router-dom'

import google from '../assets/google.jpg'

import { authcontext } from '../context/Authcontext';
import { useUserContext } from '../context/userContext';
import axios from 'axios';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../utils/Firebase';
import { toast } from 'react-toastify';


const Registration = () => {
  const { saveUrl } = useContext(authcontext);
  const { fetchCurrentUser } = useUserContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState(null);
  const Navigate = useNavigate();

  const handleSingup = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(saveUrl + '/api/auth/register', {
        name, email, password, number
      }, { withCredentials: true });
       await fetchCurrentUser();
      
      console.log(result.data);
      toast.success("Registration Success")
      Navigate("/");
    } catch (error) {
      console.log("error in the registration page " + error);
    toast.error("Registration failed")
    }
  };

  const googleRegister = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      const user = response.user;
      const name = user.displayName;
      const email = user.email;
      console.log(user);
      const result = await axios.post(saveUrl + "/api/auth/googleregister", {
        name, email
      }, {
        withCredentials: true
      });
      await fetchCurrentUser();
      Navigate("/");
      toast.success("Google register")
      console.log(result.data);
    } catch (error) {
      toast.error("error in google register")
      console.log("error in the googleAuth" + error);
    }
  };

  return (
<div
  className="w-full h-screen bg-gradient-to-br from-slate-800 via-slate-300 via-slate-100 to-slate-600
  flex flex-col lg:flex-row items-center justify-center
   px-8 py-12 gap-12 "
>

  {/* RIGHT CARD */}
  <div
    className="w-full sm:w-[90%] md:w-[70%] lg:w-[30%] bg--100
    max-w-[420px]  rounded-xl shadow-xl
    p-6 sm:p-8   shadow-black/30  border border-white/20 transition-all duration-300 ease-in-out  hover:-translate-y-2 hover:shadow-black/50 "
  >
    <h2 className="text-2xl font-semibold text-slate-800 text-center ">
      Create your account
    </h2>

    <p className="mt-2 text-center text-slate-600 text-sm">
      Join us and start your journey
    </p>

    {/* GOOGLE REGISTER */}
    <button
      onClick={googleRegister}
      className="w-full mt-6 flex items-center justify-center gap-3
      border border-slate-300 py-2.5 rounded-md
      hover:bg-slate-50 transition"
    >
      <img src={google} alt="google" className="w-5 h-5" />
      <span className="text-sm font-medium text-slate-700">
        Continue with Google
      </span>
    </button>

    {/* DIVIDER */}
    <div className="flex items-center gap-3 my-6">
      <hr className="flex-grow border-slate-300" />
      <span className="text-xs font-medium text-slate-500">OR</span>
      <hr className="flex-grow border-slate-300" />
    </div>

    {/* FORM */}
    <form className="flex flex-col gap-4" onSubmit={handleSingup}>
      <input
        type="text"
        placeholder="Full name"
        className="w-full px-3 py-2.5 border border-slate-300 rounded-md
        outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="tel"
        placeholder="Mobile number"
        className="w-full px-3 py-2.5 border border-slate-300 rounded-md
        outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        value={number || ""}
        onChange={(e) => setNumber(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email address"
        className="w-full px-3 py-2.5 border border-slate-300 rounded-md
        outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Create password"
        className="w-full px-3 py-2.5 border border-slate-300 rounded-md
        outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        className="mt-2 bg-blue-600 text-white py-2.5
        rounded-md font-medium hover:bg-blue-700 transition"
      >
        Create account
      </button>
    </form>

    {/* FOOTER */}
    <p className="mt-6 text-center text-sm text-slate-600">
      Already have an account?
      <span
        className="ml-1 text-blue-600 font-medium cursor-pointer hover:underline"
        onClick={() => Navigate("/login")}
      >
        Login
      </span>
    </p>
  </div>

   {/* LEFT CONTENT */}
  <div className="w-full lg:w-[45%] text-center lg:text-left">
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-800 leading-tight shadow-black/30  transition-all duration-300 ease-in-out  hover:-translate-y-2 hover:shadow-black/50">
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

    <p className="mt-4 text-xl font-bold text-slate-500">
      © Admin Panel
    </p>
  </div>
</div>






  )
}

export default Registration