import React, { useContext } from 'react'
import { ShopDataContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'

function Background1({Count}) {
    
    let {products} = useContext(ShopDataContext)
   let {productId}= useParams()

        const fetchProduct = async () => {
    products.map((item)=>{
        if(item._id === productId){
            setProductDa(item)
     
            
            setImage1(item.image1)
            setImage2(item.image2)
            setImage3(item.image3)
            setImage4(item.image4)
            setImage(item.image1)
            return null;
        }
    })
    }


       useEffect(()=>{
            fetchProduct()
        },[productId, products])

   if(Count === 0){
        return <div className='md:w-[100px]  border-[2px] border-green-200 rounded-md mb-[10px]'>
                    <img src={image1} alt="" className='w-[100%] h-[100%] cursor-pointer' onClick={() => setImage(image1)}/>
                </div>
   }
   else if(Count === 1){
    return  <div className='md:w-[100px] bg-slate-500 border-[2px] border-green-200 rounded-md mb-[10px]'>
                    <img src={image2} alt="" className='w-[100%] h-[100%] cursor-pointer'  onClick={() => setImage(image2)}/>
                </div>
   } else if(Count === 2){
    return  <div className='md:w-[100px] bg-slate-500 border-[2px] border-green-200 rounded-md mb-[10px]'>
                    <img src={image3} alt="" className='w-[100%] h-[100%] cursor-pointer'  onClick={() => setImage(image3)}/>
                </div>
   } else if(Count === 3){
    return  <div className='md:w-[100px] bg-slate-500 border-[2px] border-green-200 rounded-md mb-[10px]'>
                    <img src={image4} alt="" className='w-[100%] h-[100%] cursor-pointer'  onClick={() => setImage(image4)}/>
                </div>
   } 

}

export default Background1