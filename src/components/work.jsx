import React from 'react'


var images = [
    {url: "https://business.adobe.com/blog/basics/media_14e35529cffcb7d5fe9d68dc1fbcf3662196be3f3.png?width=750&format=png&optimize=medium" , top: "60%" , left: "50%" , isActive: true},
    { url: "https://i.pinimg.com/736x/d1/0d/26/d10d26562e243a6a38ab5f996df09261.jpg" , top: "56%" , left: "54%" , isActive: false},
    { url : "https://www.cssdesignawards.com/cdasites/2025/202506/20250609114702.jpg" , top: "51%" , left: "55%" , isActive: false},
    { url : "https://www.cssdesignawards.com/cdasites/2025/202506/20250607115711.jpg" , top: "50%" , left: "50%" , isActive: false},
]
function Work() {
  return (
    <div className='w-full '>
      <div className=' relative max-w-screen-xl  mx-auto text-center py-12'>
        <h1 className='text-[30vw] font-bold leading-none select-none' >DEV</h1>
        <div className='absolute top-0 w-full h-full ' >
            {images.map((image , index) => image.isActive && <img className='w-60 absolute rounded-md -translate-x-1/2 -translate-y-1/2' src={image.url} style={{top: image.top , left: image.left}} alt={`image-${index}`} />)}
        </div>
      </div>
    </div>
  )
}

export default Work