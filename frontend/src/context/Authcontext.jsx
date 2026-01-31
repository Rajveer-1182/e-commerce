import React, { Children, createContext } from 'react'


export const authcontext = createContext();

const Authcontext = ( {children}) => {
  
    let saveUrl = "http://localhost:4000";
    let value = {
      saveUrl
    }


  return (
  <div>

    <authcontext.Provider value={value}>
    {children}
    </authcontext.Provider>
  </div>
  )
}

export default Authcontext