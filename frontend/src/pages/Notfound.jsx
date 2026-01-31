import React from 'react'
import { useNavigate } from 'react-router-dom'

function Notfound() {
   let navigate = useNavigate();

  return (
    <div className='w-[99vw]  h-[99vh] bg-slate-600 md:text-[70px] text-[30px] flex items-center justify-center text-[white] flex-col gap-[20px]'>
         404 Page not Found
         <button className='bg-white px-[40px] py-[20px] rounded-xl text-[18px] text-[black]'
         onClick={()=> navigate ('/login')}
         >
            Log In
         </button>
    </div>
  )
}

export default Notfound