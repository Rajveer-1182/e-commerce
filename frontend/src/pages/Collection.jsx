import React, { useContext, useEffect, useState } from 'react'
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md"
import Title from '../component/Title'
import { ShopDataContext } from '../context/ShopContext'
import Card from "../component/Card"

function Collection() {

  const [showFilter, setShowFilter] = useState(false)
  const { products,search,showSearch} = useContext(ShopDataContext)

  const [filterProduct, setFilterProduct] = useState([])
  const [category, setCategory] = useState([])
  const [SubCategory, setSubCategory] = useState([])
   const [sortType, setSortType] = useState("relavent")

  // CATEGORY TOGGLE
  const toggleCategory = (e) => {
    const value = e.target.value
    setCategory(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    )
  }

  // SUBCATEGORY TOGGLE
  const toggleSubCategory = (e) => {
    const value = e.target.value
    setSubCategory(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    )
  }

  // APPLY FILTER ON THE ELEMENT
  const applyFilter = () => {
    let copy = [...products]

    if(showSearch && search){
      copy = copy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      copy = copy.filter(item => category.includes(item.category))
    }

    if (
SubCategory.length > 0) {
      copy = copy.filter(item => SubCategory.includes(item.SubCategory))
    }
    setFilterProduct(copy)
  }

  const sortProduct = (e)=>{
    let fb = filterProduct.slice()

    switch(sortType){
      case "low-high":
      setFilterProduct(fb.sort((a,b) =>(a.price-b.price)))
      break;
          
      case "high-low":
        setFilterProduct(fb.sort((a,b)=>(b.price-a.price)))
        break;
        default:
         applyFilter()
         break;
    }
  }

  useEffect(()=>{
    sortProduct()
  },[sortType])

  useEffect(() => {
    setFilterProduct(products)
  }, [products])

  useEffect(() => {
    applyFilter()
  }, [category, SubCategory,search,showSearch])

  return (
    <div className='w-full min-h-screen flex flex-col md:flex-row bg-white'>

      {/* SIDEBAR */}
      <div className={`w-full md:w-[30vw] lg:w-[20vw] p-5 bg-gray-600 text-red-300 border-r`}>
        <p
          className='font-semibold flex items-center gap-2 cursor-pointer'
          onClick={() => setShowFilter(prev => !prev)}
        >
          FILTERS
          {!showFilter ? <MdKeyboardArrowRight className='md:hidden' /> : <MdKeyboardArrowDown className='md:hidden' />}
        </p>

        {/* CATEGORY */}
        <div className={`mt-6 ${showFilter ? "block" : "hidden"}  md:block`}>
          <p className='text-green-200 underline mb-2'>CATEGORIES</p>
          <div className='flex flex-col gap-2'>
            <label><input type="checkbox" value="men" onChange={toggleCategory} /> Men</label>
            <label><input type="checkbox" value="Women" onChange={toggleCategory} /> Women</label>
            <label><input type="checkbox" value="Kids" onChange={toggleCategory} /> Kids</label>
          </div>
        </div>

        {/* SUB CATEGORY */}
        <div className={`mt-6 ${showFilter ? "block" : "hidden"} md:block`}>
          <p className='text-green-200 underline mb-2'>SUB CATEGORIES</p>
          <div className='flex flex-col gap-2'>
            <label><input type="checkbox" value="Top-wear" onChange={toggleSubCategory} /> Top-Wear</label>
            <label><input type="checkbox" value="Bottom-wear" onChange={toggleSubCategory} /> Bottom-Wear</label>
            <label><input type="checkbox" value="Winter-wear" onChange={toggleSubCategory} /> Winter-Wear</label>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className='flex-1 p-5'>

        {/* HEADER */}
        <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center p-5 rounded-lg'>
          <Title text1="All" text2="COLLECTION" />
         
          <select className='bg-slate-600 text-white h-[45px] px-4 rounded-lg mt-4 lg:mt-0' onChange={(e)=> setSortType(e.target.value) }>
            <option value="relavent">Sort By: Relevant</option>
            <option  value=" low-high">Low to High</option>
            <option value="high-low">High to Low</option>
          </select>
        </div>
          <hr />
        {/*Get from the shopdatacontext PRODUCTS */}
        <div className='mt-8 flex flex-wrap justify-center gap-5'>
          {
            filterProduct.map((item) => (
              <Card
                key={item._id}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image1}
              />
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default Collection
