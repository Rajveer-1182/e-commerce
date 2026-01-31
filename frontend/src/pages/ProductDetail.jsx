import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { ShopDataContext } from '../context/ShopContext'
import { FaRegStar } from "react-icons/fa";
import RelatedProduct from '../component/RelatedProduct';
import { toast } from 'react-toastify';


function ProductDetail({Count}) {
  let {productId }= useParams()
  let {products, currency,addtoCart} = useContext(ShopDataContext)
   let [productData, setProductDa] = useState(false)

   const [image, setImage] = useState(" ")
    const [image1, setImage1] = useState(" ")
     const [image2, setImage2] = useState(" ")
      const [image3, setImage3] = useState(" ")
       const [image4, setImage4] = useState(" ")
      
    const[size, setSize] = useState("")


    const fetchProductDetails = async () => {
    products.map((item)=>{
        if(item._id === productId){
            setProductDa(item)
            console.log(productData)
            
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
        fetchProductDetails()
    },[productId, products])

  return productData ?  (
    <div className=''>
        <h1 className=' lg:mt-10 font-bold bg-slate-600 lg:text-5xl underline text-green-300 p-4'>Product Detail</h1>
      <div className='lg:w-[99vw] w-full md:w-[100vw] min-h-[100vh] flex items-start justify-start lg:flex-row flex-col bg-slate-600 gap-[10px] '>
         {/* Product Details Section there are multiple type of image and jis image par click karenge wo main image ban jayegi */}
         {/*  this is the left side div */}
         
          <div className=' lg:w-[50vw] w-[100vw] md:w-[90vw] lg:h-[90vh] h-[80%] w-[50%]  mt-[0px] flex flex-row items-start justify-start md:gap-[10px] gap-[40px]  flex-col-reverse lg:flex-row p-[40px] '>
              {/* div for image */}
              <div className='lg:w-[20%] md:w-[80%] h-[60%] w-[20%] lg:h-[80%] lg:flex-col   '>
                        {/*  4 describe div  */}
                     
                          <div className='md:w-[100px]  border-[2px] border-green-200 rounded-md mb-[10px]'>
                    <img src={image1} alt="" className='w-[100%] h-[100%] cursor-pointer' onClick={() => setImage(image1)}/>
                </div>

                 <div className='md:w-[100px] bg-slate-500 border-[2px] border-green-200 rounded-md mb-[10px]'>
                    <img src={image2} alt="" className='w-[100%] h-[100%] cursor-pointer'  onClick={() => setImage(image2)}/>
                </div>

                 <div className='md:w-[100px] bg-slate-500 border-[2px] border-green-200 rounded-md mb-[10px]'>
                    <img src={image3} alt="" className='w-[100%] h-[100%] cursor-pointer' onClick={() => setImage(image3)}/>
                </div>


                 <div className='md:w-[100px] bg-slate-500 border-[2px] border-green-200 rounded-md mb-[10px]'>
                    <img src={image4} alt="" className='w-[100%] h-[100%] cursor-pointer' onClick={() => setImage(image4)}/>
                </div> 
                            
               
                
                </div> 

                 <div className='lg:w-[80%] w-[100%]  lg:h-[100%] h-[100%] border-[1px] border-green-100 rounded-md overflow-hidden'>
                    <img src={image} alt="" className='w-[100%] lg:h-[100%]  text-[30px] text-white text-center rounded-md object-fill'/>
                </div>
          </div>

           {/*  this is the right side div that is using the product details */}
             <div className='lg:w-[50%] w-[100vw] lg:h-[75vh] lg:mt-[0px] h-[50vh] flex items-start justify-start flex-col py-[20px] px-[30px] md:pb-[20px] md:pl-[20px] lg:pl-[0px] lg:px-[0px] gap-[10px] '>
                <h1 className='text-[40px] font-semibold text-[aliceblue]'>{productData.name.toUpperCase()}</h1>
                <div className='flex items-center gap-1'>
                    <FaRegStar className='text-20px fill-yellow-600'/>
                     <FaRegStar className='text-20px fill-yellow-600'/>
                      <FaRegStar className='text-20px fill-yellow-600'/>
                       <FaRegStar className='text-20px fill-yellow-600'/>
                        <FaRegStar className='text-20px fill-yellow-600'/>
                   <p className='text-[16px] font-semobold pl-[5px] text-white'>123</p>
                </div>
                <p className='text-[30px] font-bold text-purple-400'>{currency}{productData.price}</p>
                <p className='text-[16px] text-white '>{productData.Description}Tailored with precision using high-quality material, offering a sharp look, comfortable feel, and long-lasting elegance.</p>
             
               <div className='flex flex-col gap-[10px] my-[10px] '>
                <label htmlFor="sizes" className='text-white font-semibold'>Select Size :</label>
                <div className='flex gap-2'>
                   {
                    productData.sizes.map((item, index)=>{
                        return ( <button key={index} className={`border py-2 px-4  border-slate-300 rounded-md ${item === size ? 'bg-green-500 text-white' : 'bg-white text-black text-2xl'}`}
                        onClick={()=> setSize(item)}
                        >{item} </button>)
                    })
                   }
                </div>
                <button className=' text-[16px] cursor-pointer bg-green-200 text-black py-4 px-6 shadow-md rounded-md mt-5 hover:bg-green-600 transition-all duration-300 ease-in-out' onClick={()=> addtoCart(productData._id , size)}>
                    Add to Cart
                </button>
               </div>

                <div className='h-[20px] bg-gray-200 w-[85%]'></div>
                      <div className='w-[100%] lg:w-[80%] h-[120px] text-[16px] text-white font-semibold'>
                        <p className='text-purple-200'>100% Original Products</p>
                        <p className='text-purple-200'> Cash On delivery available on this product</p>
                        <p className='text-purple-200'> Easy return and exchange policy within 7 days</p>
                      </div>
             </div>
      </div>

      <div className='w-[100%] min-h-[100vh] bg-slate-600 flex items-start lg:mt-0 justify-start flex-col gap-5 overflow-x-hidden'>
           <div className=' flex px-[20px] mt-[0px] lg:ml-[80px] ml-[0px] lg:mt-[0px] mt-[100px] font-bold '>
                    <p className='border px-5 py-3 text-lg text-white'>
                        Description
                    </p>

                     <p className='border px-5 py-3 text-lg text-white'>
                        Review(123)
                    </p>
           </div>

           <div className=' w-[90%]  md:h-[150px] h-[600px] lg:mt-2   bg-slate-500 border text-white text-[13px] md:text-[15px] lg:text-[20px] px-[10px] md:px-[30px] lg:ml-[100px] ml-[20px]'>
             <p className='w-[95%] h-[90%] flex items-center justify-center text-lg p-1 mt-1'>
                I recently purchased clothes from this store, and I am extremely satisfied with the overall experience. The fabric quality feels premium, soft, and comfortable on the skin, making it perfect for daily wear as well as special occasions. The stitching and finishing are neat, showing great attention to detail. The fit was exactly as described on the website, which made online shopping easy and reliable. Colors looked the same as shown in the images, without any fading after washing. Delivery was fast, and the packaging was clean and secure. Customer support was also responsive and helpful when I had a small query about sizing. Overall, this brand offers stylish, high-quality clothing at a reasonable price. I would definitely recommend these clothes to anyone looking for comfort, durability, and modern design. I am happy with my purchase and will shop again soon.
             </p>
           </div>
           <div className='flex items-center justify-center '>
                      <RelatedProduct category={productData.category} subCategory={productData.subCategory} currentPriductId={productData._id}  />
              </div>
      </div>

    </div>
  ): <div className='opacity-0'> ...loading useCallback</div>
}

export default ProductDetail