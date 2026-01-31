import React, {createContext, useContext, useEffect, useState } from 'react'
import { authcontext } from './Authcontext'
import axios from 'axios'
import { userDataContext } from './userContext'
import { toast } from 'react-toastify'

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export const ShopDataContext = createContext(null)
// create global store that any component access 

 export function ShopContext({children}) {

  const [products, setproducts] = useState([])
  let [search, setSearch] = useState("")
  let [showSearch , setShowSearch] = useState(false)
  let [cartItems, setCartItems] = useState([])
  let [Loading , setLoading] = useState(false)
//   check if userData logged in
  let {userData} = useContext(userDataContext) 

    const { saveUrl } = useContext(authcontext);
   let currency = "$";
   let delivery_fee  = 10;
   

// get request on the server url 

// it is toasstify function

// const notify = () => toast.success('Cart added successfully!');

//  we fetch the product from backend
const getProducts = async ()=>{
    try {
        let result =  await axios.get(saveUrl  + "/api/product/list")
        console.log(result.data);
        setproducts(result.data)
        
    } catch (error) {
        console.log(error)
    }
}


// 1-clone existing cart 2-Add or increment size 3-sync cart with backend 4- update UI state
  const addtoCart = async (itemId , sizes)=>{
    if(!itemId){
        console.log("select first item")
        return;
    }
// prevent Direct mutation of state maintain react immutablr rules
    let cartData = structuredClone(cartItems);
    // this means is this product already exist in cart
    if(cartData[itemId]){
       if (cartData[itemId]){(
        cartData[itemId][sizes] )+= 1;
    } else{
       
        cartData[itemId][sizes] = 1;
    }
}
    else{
        cartData[itemId] = {};
        cartData[itemId][sizes] = 1;
    }
        if(userData){
            try {
                let response = await axios.post(saveUrl + "/api/cart/add", {
                    itemId,
                    sizes
                }, {withCredentials: true});
                // notify();
                setLoading(false)
                
                console.log(response)
            } catch (error) {
                console.log(error)
                // toast.error("Error adding to cart")
                setLoading(false)    
            }
        }
    setCartItems(cartData);
    toast.success("items added")
    console.log(cartData);
  }


// create a function to get a usercart data from backend

const getUserCart = async ()=>{
try {
    let response = await axios.post(saveUrl + "/api/cart/get",{},{withCredentials: true});

    setCartItems(response.data);
    console.log("user cart data", response.data);
} catch (error) {
    console.log(error)
    // toast.error("Error fetching cart data in usercart")  
}
}

// create a function to update cart and also quantity of items in cart beased on item id and size
// when we create a cart page then set the value on this page
// 
const updateCart  = async (itemId, sizes, quantity)=>{
    
    let cartData = structuredClone(cartItems);
    cartData[itemId][sizes] = quantity;
    setCartItems(cartData);
    if(userData){
    try {
        let response = await axios.post(saveUrl + "/api/cart/update", {
            itemId,
            sizes,
            quantity
        }, {withCredentials: true});
        toast.success("Item removed")
        console.log(response);
    } catch (error) {
        
        console.log(error);
    }
}
else {
    console.log("user not login")
}
}
//   create a function to calculate total count of items in cart

   const totalCount = ()=>{
    let Count = 0;
       for(let items in cartItems){
        for(let item in cartItems[items]){
            try{
                if(cartItems[items][item] > 0){
                    Count += cartItems[items][item];
                }
            } catch (error) {
                console.log(error);
            }
        }
       }
       return Count;
   }

//    const getAmount = ()=>{
//     let totalAmount = 0;
//     for(let items in cartItems){
//     let itemInfo  = products.find((product) => product._id === items)
//     for(let item in cartItems[items]){  
//       try {
//         if(cartItems[items][item]>0){
//             totalAmount += itemInfo.price * cartItems[items][item];
//             console.log(totalAmount)
//         }
//         // console.log(totalAmount)
//       } catch (error) {
//         console.log(error)
//       }

// }
//     return totalAmount;
//    }
// }

const getAmount = () => {
  let totalAmount = 0;

  for (let itemId in cartItems) {
    const itemInfo = products.find(
      (product) => product._id === itemId
    );
    

    if (!itemInfo) continue; // 🔥 SAFETY CHECK

    for (let size in cartItems[itemId]) {
      const quantity = cartItems[itemId][size];
      if (quantity > 0) {
        totalAmount += itemInfo.price * quantity;
      }
    }
  }

  return totalAmount;
};


useEffect(()=>{
    getProducts()
},[])

useEffect(()=>{
    getUserCart()
},[])


let value = {
products, currency, delivery_fee, getProducts,search, setSearch,showSearch , setShowSearch, cartItems, setCartItems, addtoCart, totalCount, updateCart ,getAmount,
}

  return (
    <div>
        <ShopDataContext.Provider value={value}>
            {children}
        </ShopDataContext.Provider>
    </div>
  )
}

export default ShopContext