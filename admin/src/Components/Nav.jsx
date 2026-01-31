import React, { useContext } from 'react'
import logo1 from '../assets/logo1.png'
import {  useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthDataContext } from '../context/AuthContext'
import { AdminDataContext } from '../context/AdminContext'
import { toast } from 'react-toastify'

function Nav() {
 
  let navigate = useNavigate()
   let {serverUrl} = useContext(AuthDataContext)
   let {getAdmin} = useContext(AdminDataContext)

  const logOut = async()=>{
try {
  const result  = await axios.post(serverUrl + "/api/auth/logout",
    {withCredentials:true})
    console.log(result.data)
    toast.success("LogOut Successfully")
    getAdmin()
    navigate("/login")
  
} catch (error) {
  console.log(error)
}
  }

  return (
    <div className='w-[100vw] h-[80px] bg-gary-800 z-10 fixed top-0 flex items-center justify-between px-[30px] overflow-x-hidden shadow-md shadow-black'>
     <div className='w-[40px] cursor-pointer '  onClick={()=>navigate('/')}>
       <img src={logo1} alt="" />
       <h1 className='text-[20px] text-[black]'>Cart</h1>
     </div>

      <button className='text-[15px] hover:border-[2px] cursor-pointer px-[20px] py-[10px] rounded-2xl text-white bg-black'
      onClick={logOut}
      >Logout</button>
     
    </div>
  )
}

export default Nav