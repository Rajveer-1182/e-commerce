import React, { useContext, useState } from 'react'
import Nav from '../Components/Nav'
import SideBar from '../Components/SideBar'
import uploadimg from '../assets/upload.png'
import { AuthDataContext } from '../context/AuthContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import Loading from '../Components/Loading'


const Add = () => {

   let [image1 , setimage1]  = useState(false)
   let [image2 , setimage2]  = useState(false)
   let [image3 , setimage3]  = useState(false)
   let [image4 , setimage4]  = useState(false)

    const [loading ,setLoading] = useState(false)

   let [name,setname] = useState("")
     const [Description, setDescription] = useState("")
   const [category, setcategory] = useState("men")
   const [price, setprice] = useState("");

   const [SubCategory, setSubCategory] = useState("Top-wear")
   const [bestSeller, setbestSeller] = useState(false)
  const [sizes, setsizes] = useState([])

     let {serverUrl} = useContext(AuthDataContext)

   const handleAddproduct = async (e)=>{
    setLoading(true)
    e.preventDefault()
    try {
     let formData = new FormData()
     //we use append mainly when we want to add new data to an existing list without removing the old data.
    formData.append("name",name)
   formData.append("Description", Description)
formData.append("price", price)
formData.append("category", category)
formData.append("SubCategory", SubCategory)

    formData.append("bestSeller",bestSeller)
    formData.append("sizes",JSON.stringify(sizes))
    formData.append("image1",image1)
     formData.append("image2",image2)
      formData.append("image3",image3)
       formData.append("image4",image4)

       let result = await axios.post(serverUrl + "/api/product/addproduct",
        formData, {withCredentials:true}
       )

       console.log(result.data)
       toast.success(" Add Product Successfully")
     setLoading(false)
       if(result.data){
           setname("")
           setDescription("")
           setimage1(false)
           setimage2(false)
           setimage3(false)
           setimage4(false)
           setprice("") 
           setbestSeller(false)
           setcategory("Men")
           setSubCategory("topWear")
       }

    } catch (error) {
      console.log(error+"error in Add ");  
        
     setLoading(false)
     toast.error("error prooducts")
    }
   }


  return (
    <div className='w-[100vw] min-h-[100vh] bg-slate-600 overflow-x-hidden text-white relative'>
  <Nav/>
  <SideBar/>
    <div className='w-[82%] h-[100%] flex items-center justify-start overflow-x-hidden absolute right-0'>
      <form action="" onSubmit={handleAddproduct} className='w-[100%] md:w-[90%] h-[100%] mt-[70px] flex flex-col py-[60px] px-[30px] md:px-[60px]'>
        <div className='w-[400px] h-[50px] text-[25px] md:text-[40px] text-black'> 
          Add product Page
        </div>
        {/* for uploading the image  */}
        <div
        className='w-[80%] h-[130px] flex items-start justify-center flex-col mt-[22px] md:text-[28px] font-semiblodd gap-5 '
        >
        <p className='text-[20px] md:text-[25] font-semibold text-black'>Upload Image</p>
        
         <div className='w-[100%] h-[100%] flex items-center justify-start '>
         <label htmlFor="image1" className='w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-green-200'>

             <img src={!image1 ? uploadimg : URL.createObjectURL(image1)} alt=""  className='w-[80%] h-[80%] rounded-2xl '/>
          <input type="file" id='image1' hidden onChange={(e)=>{
            setimage1(e.target.files[0])
          }} required/>
         </label>

           <label htmlFor="image2" className='w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-green-200'>

             <img src={!image2 ? uploadimg : URL.createObjectURL(image2)} alt=""  className='w-[80%] h-[80%] rounded-2xl '/>
          <input type="file" id='image2' hidden onChange={(e)=>{
            setimage2(e.target.files[0])
          }}   required/>
         </label>

           <label htmlFor="image3" className='w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-green-200'>

             <img src={!image3 ? uploadimg : URL.createObjectURL(image3)} alt=""  className='w-[80%] h-[80%] rounded-2xl '/>
          <input type="file" id='image3' hidden onChange={(e)=>{
            setimage3(e.target.files[0])
          }}   required/>
         </label>

           <label htmlFor="image4" className='w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-green-200'>

             <img src={!image4 ? uploadimg : URL.createObjectURL(image4)} alt=""  className='w-[80%] h-[80%] rounded-2xl '/>
          <input type="file" id='image4' hidden onChange={(e)=>{
            setimage4(e.target.files[0])
          }}   required/>
         </label>
      
         </div>

        </div>

          {/* For product */}
        <div className='w-[80%] h-[100px] flex items-start justify-center flex-col gap-[10px] '>
            <p 
            className='text-[20px] text-black md:text-[25px] font-semibold'
            >Product Name</p>
             <input type="text"  placeholder='Type here'
             className='w-[600px] max-w-[98%] h-[40px] rounded-lg hover:border-red-200 border-[2px] cursor-pointer bg-slate-600 px-[20px] text-[18px] placeholder:text-green-300'
              onChange={(e)=>
               setname(e.target.value)
              }  value={name}/>
        </div>
         {/* Descrption */}
           <div className='w-[80%]  flex items-start justify-center flex-col gap-[10px] '>
            <p 
            className='text-[20px] text-black md:text-[25px] font-semibold'
            >Description </p>
             <textarea type="text"  placeholder='Type here'
             className='w-[500px] py-[10px] max-w-[98%] h-[80px] rounded-lg hover:border-red-200 border-[2px] cursor-pointer bg-slate-600 px-[20px] text-[18px] placeholder:text-green-300'
              onChange={(e)=>
                setDescription(e.target.value)
              } value={Description}/>
        </div>
          {/* Product Category */}
          <div className='w-[80%] flex items-center gap-[10px] flex-wrap'>
             <div className='md:w-[30%] w-[100%] flex items-start sm:justify-center flex-col gap-[10px] '>
               <p 
            className='text-[15px] text-black md:text-[20px] font-semibold'
            >Product Categry </p>
            <select name="" id="" className='bg-slate-600 w-[60%] px-[10px] py-[7px] rounded-lg hover:border-red-300 border-[2px]'
            onChange={(e)=>
              setcategory(e.target.value)
            }
            >
             <option value="Men">Men</option>
              <option value="Women">WoMen</option>
               <option value="Kids">Kids</option>
            </select>
             </div>

              <div className='md:w-[30%] w-[100%] flex items-start sm:justify-center flex-col gap-[10px] '>
               <p 
            className='text-[15px] text-black md:text-[20px] font-semibold'
            >Product-Sub Categry </p>
            <select name="" id="" className='bg-slate-600 w-[60%] px-[8px] py-[7px] rounded-lg hover:border-red-300 border-[2px]'
            onChange={(e)=>
              setSubCategory(e.target.value)
            }
            >
             <option value="Top-Wear">Top-Wear</option>
              <option value="Bottom-wear">Bottom-wear</option>
               <option value="Winter-wear">Winter-wear</option>
            </select>
             </div>
          </div>
        {/* Product Price */}
   <div className='w-[80%] h-[100px] flex items-start justify-center flex-col gap-[10px] '>
            <p 
            className='text-[20px] text-black md:text-[25px] font-semibold'
            >Product Price</p>
             <input type="number"  placeholder='1000'
             className='w-[600px] max-w-[98%] h-[40px] rounded-lg hover:border-red-200 border-[2px] cursor-pointer bg-slate-600 px-[20px] text-[18px] placeholder:text-green-300'
            value={price} 
            onChange={(e) => setprice(Number(e.target.value))}
required
             />
        </div>


                 {/*Sizes Section  */}
                 <div className='w-[80%] h-[220px] md:h-[100px] flex items-start justify-center flex-col gap-[10px] py-[10px] md:py-[0px]'>
                <p 
                className='text-[20px] md:text-[25] font-semibold text-black'
                >Product Size</p>

                <div className=' flex items-center justify-start flex-wrap gap-[15px]'>
                <div className={`px-[20px] py-[7px] rounded-lg bg-slate-600 text-[18px] hover:border-red-300 border-[2px] cursor-pointer ${sizes.includes("S") ? " bg-green-200 text-red border-yellow-300 " :" "}`}
                onClick={()=>setsizes(prev => prev.includes("S") ? prev.filter(item => item !== "S" ) : [...prev ,"S"])}
                >
                         S </div>
               

                 <div className={`px-[20px] py-[7px] rounded-lg bg-slate-600 text-[18px] hover:border-red-400 border-[2px] cursor-pointer ${sizes.includes("M") ? " bg-green-200 text-red border-yellow-300 " :" "}`}
                onClick={()=>setsizes(prev => prev.includes("M") ? prev.filter(item => item !== "M" ) : [...prev ,"M"])}
              >
                  M </div>
                

                 <div className={`px-[20px] py-[7px] rounded-lg bg-slate-600 text-[18px] hover:border-red-300 border-[2px] cursor-pointer ${sizes.includes("L") ? " bg-green-200 text-red border-yellow-300 " :" "}`}
                onClick={()=>setsizes(prev => prev.includes("L") ? prev.filter(item => item !== "L" ) : [...prev ,"L"])}>
                   L
                </div>

                 <div className={`px-[20px] py-[7px] rounded-lg bg-slate-600 text-[18px] hover:border-red-300 border-[2px] cursor-pointer ${sizes.includes("XL") ? " bg-green-200 text-red-300 border-yellow-300 " :" "}`}
                onClick={()=>setsizes(prev => prev.includes("XL") ? prev.filter(item => item !== "XL" ) : [...prev ,"XL"])}>
                   Xl
                </div>

                 <div className={`px-[20px] py-[7px] rounded-lg bg-slate-600 text-[18px] hover:border-red-300 border-[2px] cursor-pointer ${sizes.includes("XXL") ? " bg-green-400 text-red-300 border-yellow-300 " :" "}`}
                onClick={()=>setsizes(prev => prev.includes("XXL") ? prev.filter(item => item !== "XXL" ) : [...prev ,"XXL"])}>
                    XXl
                </div>
                
                </div>

                 </div>

                 {/* Check book for bestSeller */}

                 <div className='w-[80%] h-[100px] flex items-center justify-start  gap-[10px] mt-[20px]'>
                    <input type="checkBox"  id="checkBox" className='w-[25px] h-[25px]  cursor-pointer' onChange={()=>setbestSeller(prev => !prev) } />
                    <label htmlFor='checkBox' className='text-[18px] md:text-[22px] font-semibold text-black'>Add to BestSeller</label>
                 </div>

            <button
             className='w-[140px] h-[50px] px-[20px] mt-[15px] py-[20px] rounded-xl bg-gray-400 flex items-center justify-center gap-[10px] text-black font-bold active:bg-slate-300 active:text-green active:border-[2px] border-green-300'
            > {loading ? <Loading/> : "Add product"}</button>

      </form>
    </div>
    </div>
  )
}

export default Add