import React from 'react'

function Marquee({images}) {
  return (
    <div className='flex w-full py-10 gap-20 whitespace-nowrap overflow-hidden'>
      {images.map((url, index) => <img key={index} src={url} className='w-28 flex-shrink-0'/>)}
    </div>
  )
}

export default Marquee  