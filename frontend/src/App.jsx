import React from 'react'
import RoutesComponent from './routes/RoutesComponent'
import { ToastContainer, toast } from 'react-toastify';
import Ai from './component/Ai';


const App = () => {
  return (
    <>
      <div className='h-screen w-full bg-slate-800'>
       {/* <div className="min-h-screen w-full bg-gray-100"> */}
        <RoutesComponent/>
          <ToastContainer />
          <Ai/>
  </div>
    </>

  )
}

export default App