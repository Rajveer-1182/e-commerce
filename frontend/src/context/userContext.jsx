import React, { createContext, useState, useEffect, useContext } from 'react'
import { authcontext } from './Authcontext'
import axios from 'axios'

export const userDataContext = createContext()

export function UserContextProvider({ children }) {
  const [userData, setuserData] = useState(null)
  const [loading, setLoading] = useState(true)
  const auth = useContext(authcontext) || {}
  const saveUrl= auth.saveUrl || 'http://localhost:4000'
  
   const fetchCurrentUser = async()=>{
  try {  
  const { data } = await axios.get(saveUrl + '/api/user/getCurrentUser',  {
    withCredentials: true
  })
   setuserData(data)

  } catch (error) {
  setuserData(null)
    // console.log(error?.response?.data || error.message || error)
  }finally {
    setLoading(false);   // 🔥 MOST IMPORTANT
  }
   }

useEffect(()=>{
 fetchCurrentUser()
},[])
   
const value = { userData, setuserData, fetchCurrentUser, loading }

  return (
    <userDataContext.Provider value={value}>
      {children}
    </userDataContext.Provider>
  )
}

export function useUserContext(){
  return useContext(userDataContext)
}