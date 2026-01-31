import React from 'react'

function Title({text1,text2}) {
  return (
    <div className='inline-flex gap-2 items-cneter text-center mb-3 text-[35px] md:text-[40px] '>
      <p
      className='font-semibold '
      >{text1} <span className='text-green-300'>{text2}</span></p>
    </div>
  )
}

export default Title