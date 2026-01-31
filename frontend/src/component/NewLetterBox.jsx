import React from 'react'

function NewLetterBox() {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  }
  return (
    <div className='w-[100%] h-[40vh] bg-slate-600 flex items-center justify-start gap-[10px] flex-col '>
     <p className='md:text-[30px] text-[20px] text-purple-200 px-[20px] font-semibold mt-[20px]'>
       Subscribe to our newsletter & get 30% off on your first purchase!
     </p>
        <p className='text-white text-center px-[20px]'>
          Get the latest updates and offers enjoy , exculsive , specialdeals , and early acces to Collection
        </p>

        <form action="" onSubmit={handleSubmit}
         className='w-[100%] h-[45%] md:h-[50%] lg:flex flex-col  flex items-center justify-center mt-[10px] gap-[5px] px-[50px]'
        >

          <input type="text" placeholder='Enter your name !' className='w-[600px] max-w-[60%] h-[50px] px-[40px] text-lg font-semibold bg-slate-300 text-black rounded-lg shadow-sm shadow-black md:h-[50%] flex items-center justify-center mt-[20px] gap-[20px] px-[20px]' required />
          <button type='submit' className='w-[120px] h-[60px] text-30px md:text-[16px] px-[10px] hover:bg-purple-700 border-[1px] cursor-pointer rounded-lg shadow-sm bg-purple-500 text-white rounded-lg shadow-sm shadow-black mt-5'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewLetterBox