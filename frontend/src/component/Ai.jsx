import React, { useCallback, useContext } from 'react'
import ai from '../assets/AAi.png'
import { ShopDataContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
// import music from '../assets/musi.mp3'

function Ai() {

    let {showSearch , setShowSearch} = useContext(ShopDataContext)
         let navigate = useNavigate();

        //  let openingSound = new Audio(music);

        //   use utterence for useSpeechmeans open close etc
        function speak(message){
            let utterence = new SpeechSynthesisUtterance(message)
        //     through speak(utterne) window me bol ke bata dega
            window.speechSynthesis.speak(utterence)
        }

    //   create variable name of
    const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    // create an object named recognition for teh speechRecogniton
    const recognition = new speechRecognition()
    if(!recognition){
        console.log(" NOt Supported")
    }

    recognition.onresult = (e)=>{
        //  create a function that name is transcipt  that passes the value from 0.0 se
      const transcript = e.results[0][0].transcript.trim();
    //  for open search or closing search
      if(transcript.toLowerCase().includes("search") && transcript.toLowerCase().includes("Open") && !showSearch){
        speak("opening search")
        setShowSearch(true)
        navigate("/collection")
      } 
      else if(transcript.toLowerCase().includes("search") && transcript.toLowerCase().includes("Open") && showSearch){
        speak("closing search")
        setShowSearch(false)
      }
   
    //    open collection pages
        else if(transcript.toLowerCase().includes("collection") || transcript.toLowerCase().includes("collections") ||
         transcript.toLowerCase().includes("about")  ||  transcript.toLowerCase().includes("abouts") 
    ){
        speak("opening collections page")
        navigate("/collection")
        }

        // open about page
          else if(transcript.toLowerCase().includes("about") || transcript.toLowerCase().includes("aboutpages")){
        speak("opening about page")
        navigate("/about")
        setShowSearch(false)
        }

//    open home page
         else if(transcript.toLowerCase().includes("home") || transcript.toLowerCase().includes("homepages")){
        speak("opening home page")
        navigate("/home")
        setShowSearch(false)
        }

        // open cart page
         else if(transcript.toLowerCase().includes("cart") || transcript.toLowerCase().includes("cartpages")){
        speak("opening cart page")
        navigate("/cart")
        setShowSearch(false)
        }
    //     for open contact
           else if(transcript.toLowerCase().includes("contact") || transcript.toLowerCase().includes("contactpages")){
        speak("opening cart page")
        navigate("/contact")
        setShowSearch(false)
        }

           else if(transcript.toLowerCase().includes("order") || transcript.toLowerCase().includes("myorders")
        || transcript.toLowerCase().includes("orders") || transcript.toLowerCase().includes(" myorder"))
        {
        speak("opening orderPages page")
        navigate("/orders")
        setShowSearch(false)
        }
        else{
            toast.error("try again by  AI")
        }


        
    }

  return (
    <div className='fixed lg:bottom-[20px] md:bottom-[40px] bottom-[80px] left-[2%]'
    onClick={()=> recognition.start()
        // openingSound.play()
    }
    >
     <img src={ai} alt=""  className='w-[70px] h-[70px] cursor-pointer rounded-[5xl]'/>
    </div>
  )
}

export default Ai