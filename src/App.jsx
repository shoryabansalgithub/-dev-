import React from 'react'
import Navbar from './components/navbar'
import Work from './components/work'
import Stripes from './components/stripes'
import Products from './components/products'
import Marquees from './components/Marquees'

function App() {
  return (
    <div className='w-full h-screen bg-zinc-900 font-["satoshi_variable"] text-white'>
      
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
    </div>
  )
}

export default App