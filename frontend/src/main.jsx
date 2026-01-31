import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'   
import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from './context/userContext.jsx';
// ...existing code...
import './index.css'
import App from './App.jsx'
import Authcontext from './context/Authcontext.jsx'
import ShopContext from './context/ShopContext.jsx';
  


createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
   <Authcontext>
  <UserContextProvider>
    <ShopContext>
        <App />
    </ShopContext>
  </UserContextProvider>
</Authcontext>
    </BrowserRouter>

)
