import React from 'react'

function Card1({items}) {
  return (
    
    <div className="
      absolute top-full  bg-white shadow-lg rounded-lg p-6 w-80  hidden group-hover:block z-50
    ">
      {items.map((item, index) => (
        <p
          key={index}
          className="py-2 px-2 hover:bg-gray-200 cursor-pointer text-lg"
        >
          {item}
        </p>
      ))}
    </div>

  )
}

export default Card1