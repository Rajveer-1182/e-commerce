import React, { useEffect } from 'react'
import Nav from '../component/Nav'
// import Home1 from './Home1'
import Hero from '../component/Hero'
import { useState } from 'react'
// import Background from '../component/Background'
import Product from './Product'
import OurPolicy from '../component/ourPolicy'
import NewLetterBox from '../component/NewLetterBox'
import Footer from '../component/Footer'
import Home1 from './Home1'


const Home = () => {
let heroData=[
   {
    text1: "Shop smarter with curated products designed for modern lifestyles.",
    text2: "Enjoy secure payments, fast delivery, and high-quality products that make everyday shopping simple and reliable."
  },
  {
    text1: "Discover quality products that combine style, comfort, and durability.",
    text2: "Browse trusted brands, easy returns, and seamless checkout for a smooth and satisfying online shopping experience."
  },
  {
    text1: "Upgrade your shopping experience with reliable and affordable products.",
    text2: "We offer carefully selected items, transparent pricing, and timely delivery to meet your daily needs."
  },
  {
    text1: "Everything you need for convenient and hassle-free online shopping.",
    text2: "From essentials to premium items, we ensure quality, value, and dependable service for every order."
  }
]

const [heroCount, setHeroCount] = useState(0)

useEffect(()=>{
  let interval  = setInterval(()=>{
    setHeroCount(prevCount => (prevCount === 3 ? 0: prevCount+1))
  },3000)
  return ()=> clearInterval(interval)
},[])
 

  return (
    <div className='h-screen lg:w-full w-[100%]'>
         <Home1/>
       <Hero 
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        heroData={heroData[heroCount]}
       />
       
       <Product/>
       <OurPolicy/>
       <NewLetterBox/>
       <Footer/>
    </div>
     )
}

export default Home