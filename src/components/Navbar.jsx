import React from 'react';
import logo from '../assets/logo.svg';
import Button from './button';

function Navbar() {
  return (
    <div className="w-full bg-zinc-900 shadow fixed top-0 left-0 z-50 border-b-2 border-zinc-700">
      <div className="max-w-screen-md mx-auto flex items-center justify-center gap-8 py-1 px-2">
        <img src={logo} alt="Logo" className="h-7" />
        <div className="links flex gap-14 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
            elem.length === 0 ? (
              <span className='w-1 h-15 bg-zinc-600' key={index}></span>
            ) : (
              <a className="text-sm text-white flex items-center gap-1" key={elem}>
                {index === 1 && <span style={{boxShadow: "0 0 0.25em #00FF19"}} className='inline-block w-1 h-1 bg-green-500 rounded-full'></span>}
                {elem}
              </a>
            )
          ))}
          <Button />
        </div>
      </div>
    </div>
  )
}

export default Navbar;