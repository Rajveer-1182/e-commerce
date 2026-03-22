import React, { useContext,lazy, Suspense  } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'

import { userDataContext } from '../context/userContext'
import Nav from '../component/Nav'
const Home = lazy(() => import('../pages/Home'))
const Login = lazy(() => import('../pages/LogIn'))
const Registration = lazy(() => import('../pages/Registration'))
const About = lazy(() => import('../pages/About'))
const Collection = lazy(() => import('../pages/Collection'))
const Product = lazy(() => import('../pages/Product'))
const Contact = lazy(() => import('../pages/Contact'))
const ProductDetail = lazy(() => import('../pages/ProductDetail'))
const Cart = lazy(() => import('../pages/Cart'))
const PlaceOrder = lazy(() => import('../pages/PlaceOrder'))
const Order = lazy(() => import('../pages/Order'))
const Notfound = lazy(() => import('../pages/Notfound'))
const Profile = lazy(() => import('../Profilemenu0/Profile'))


const RoutesComponent = () => {
  const { userData,loading } = useContext(userDataContext)
  const location = useLocation()

     if (loading) {
    return (
     <div className="h-screen flex flex-col items-center justify-center bg-gray-50">
  
  {/* Spinner */}
  <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  
  {/* Text */}
  <p className="mt-4 text-gray-600 text-sm font-medium tracking-wide">
    Loading, please wait...
  </p>

</div>
    );
  }

  return (
<>
      {userData &&  <Nav/>}

       <Suspense
      fallback={
        <div className="h-screen flex flex-col items-center justify-center bg-gray-50">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600 text-sm font-medium tracking-wide">
            Loading page...
          </p>
        </div>
      }
    >
       
    <Routes>
         <Route
        path="/"
        element={
          userData
            ? <Navigate to={location.state?.from || "/home"} />
            : <Login />
        }
      />

      {/* <Route path="/" element={<Home />} /> */}

      {/* <Route path="/login" element={userData ? <Navigate to="/" /> : <LogIn />} /> */}
          <Route path='/login' element={<Login/>}/>
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
            : <Navigate to="/Login" state={{ from: location.pathname }} />
        }
      />

      <Route
        path="/collection"
        element={
          userData
            ? <Collection />
            : <Navigate to="/Login" state={{ from: location.pathname }} />
        }
      />

       <Route
        path="/placeorder"
        element={
          userData
            ? <PlaceOrder />
            : <Navigate to="/Login" state={{ from: location.pathname }} />
        }
      />

        <Route
        path="/order"
        element={
          userData
            ? <Order />
            : <Navigate to="/Login" state={{ from: location.pathname }} />
        }
      />

      <Route
        path="/product"
        element={
          userData
            ? <Product />
            : <Navigate to="/Login" state={{ from: location.pathname }} />
        }
      />

      <Route
        path="/contact"
        element={
          userData
            ? <Contact />
            : <Navigate to="/Login" state={{ from: location.pathname }} />
        }
      />

       <Route
        path="/productDetail/:productId"
        element={
          userData
            ? <ProductDetail />
            : <Navigate to="/Login" state={{ from: location.pathname }} />
        }
      />

       <Route
        path="/cart"
        element={
          userData
            ? <Cart/>
            : <Navigate to="/Login" state={{ from: location.pathname }} />
        }
      />

      <Route
      path='/Profile'
      element={
        userData?<Profile/>:<Navigate to="/Login" state={{ from: location.pathname }} />
      }
      />

      <Route path='*' element={<Notfound/>}/>

    </Routes>
    </Suspense>
    </>
  )
}

export default RoutesComponent
