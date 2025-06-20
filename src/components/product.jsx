import React from 'react'
import Button from './button'

function Product( {val}) {
  return (
    <div className='w-full py-10  bg-zinc-900 text-white'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='flex items-center justify-between '>
          <h1 className='text-4xl font-semibold p-2 px-32'>{val.title}</h1>
          <div className='dets w-1/3 '>
            <p className='text-gray-300 text-sm mb-8'>{val.description}</p> 
            <div className='flex items-center gap-5'>
            {val.live && <Button title= "Live Website"/>}
           {val.case && <Button title="Case Study"/>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product