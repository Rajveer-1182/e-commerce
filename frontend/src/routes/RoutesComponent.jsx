import React, { useContext } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import LogIn from '../pages/LogIn'
import Registration from '../pages/Registration'
import About from '../pages/About'
import Collection from '../pages/Collection'
import Product from '../pages/Product'
import Contact from '../pages/Contact'
import { userDataContext } from '../context/userContext'
import Nav from '../component/Nav'
import ProductDetail from '../pages/ProductDetail'
import Cart from '../pages/Cart'
import PlaceOrder from '../pages/PlaceOrder'
import Order from '../pages/Order'
import Notfound from '../pages/Notfound'

const RoutesComponent = () => {
  const { userData } = useContext(userDataContext)
  const location = useLocation()

  return (
<>
      {userData &&  <Nav/>}
       
    <Routes>
         <Route
        path="/"
        element={
          userData
            ? <Navigate to={location.state?.from || "/home"} />
            : <LogIn />
        }
      />

      


      {/* <Route path="/login" element={userData ? <Navigate to="/" /> : <LogIn />} /> */}
          <Route path='/login' element={<LogIn/>}/>
{/* <Route path="/registration" element={userData ? <Navigate to="/" /> : <Registration />} /> */}
<Route path='/registration' element= {<Registration/>}/>

      <Route
        path="/home"
        element={
          userData
            ? <Home />
            : <Navigate to="/LogIn" state={{ from: location.pathname }} />
        }
      />

      <Route
        path="/about"
        element={
          userData
            ? <About />
            : <Navigate to="/LogIn" state={{ from: location.pathname }} />
        }
      />

      <Route
        path="/collection"
        element={
          userData
            ? <Collection />
            : <Navigate to="/LogIn" state={{ from: location.pathname }} />
        }
      />

       <Route
        path="/placeorder"
        element={
          userData
            ? <PlaceOrder />
            : <Navigate to="/LogIn" state={{ from: location.pathname }} />
        }
      />

        <Route
        path="/order"
        element={
          userData
            ? <Order />
            : <Navigate to="/LogIn" state={{ from: location.pathname }} />
        }
      />

      <Route
        path="/product"
        element={
          userData
            ? <Product />
            : <Navigate to="/LogIn" state={{ from: location.pathname }} />
        }
      />

      <Route
        path="/contact"
        element={
          userData
            ? <Contact />
            : <Navigate to="/LogIn" state={{ from: location.pathname }} />
        }
      />

       <Route
        path="/productDetail/:productId"
        element={
          userData
            ? <ProductDetail />
            : <Navigate to="/LogIn" state={{ from: location.pathname }} />
        }
      />

       <Route
        path="/cart"
        element={
          userData
            ? <Cart/>
            : <Navigate to="/LogIn" state={{ from: location.pathname }} />
        }
      />

      <Route path='*' element={<Notfound/>}/>

    </Routes>
    </>
  )
}

export default RoutesComponent
