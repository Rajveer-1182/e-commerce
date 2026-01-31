import { Routes, Route } from 'react-router-dom'
import { useContext } from 'react'
import AdminContext, { AdminDataContext } from '../context/AdminContext'

import Home from '../pages/Home'
import Add from '../pages/Add'
import List from '../pages/List'
import LogIn from '../pages/Login'
import Orders from '../pages/Orders'
import Registers from '../pages/Register'

function Routess() {

  let {adminData}= useContext(AdminDataContext);


  return (
    <>
     { !adminData ? <LogIn/> : < >
        <Routes>
          <Route path='/' element={<Home />} />
           <Route path='/login' element={<LogIn />} />
          <Route path='/add' element={<Add />} />
          <Route path='/list' element={<List />} />
          <Route path='/orders' element={<Orders />} />
         <Route path='/register' element={<Registers/>}/>
        </Routes>
        </>
}
    </>
  );
}

export default Routess;
