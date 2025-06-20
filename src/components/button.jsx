import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function Button({title = "Get started"}) {
  return (
    <div className='w-40 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between'>
       <span className='text-sm font-medium  flex-wrap'> {title} </span>
       <FaArrowRightLong />
    </div>
  )
}

export default Button