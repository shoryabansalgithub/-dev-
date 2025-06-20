import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[25%] h-8  px-2 py-5   border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-500 flex justify-between items-center'>
        <img src={val.url} alt="" className='w-6 h-6' />
        <span className='text-white text-md text-bold font-["satoshi_variable"]'>{val.text}</span>
        <span className='text-white text-sm'>{val.number}</span>
    </div>
  )
}

export default Stripe