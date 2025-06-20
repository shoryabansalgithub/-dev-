import React from 'react'
import Marquee from './Marquee'

function Marquees() {
  var images = [
    [
      "/marquees/1.svg",
      "/marquees/2.svg",
      "/marquees/3.svg",
      "/marquees/4.svg",
      "/marquees/5.svg",
      "/marquees/6.svg",
      "/marquees/7.svg",
      "/marquees/8.svg",
      "/marquees/9.svg",
      "/marquees/10.svg"
    ],
    [
      "/marquees/11.svg",
      "/marquees/12.svg",
      "/marquees/13.svg",
      "/marquees/14.svg",
      "/marquees/15.svg",
      "/marquees/16.svg",
      "/marquees/17.svg",
      "/marquees/18.svg",
      "/marquees/19.svg",
      "/marquees/20.svg"
    ]
  ]

  return (
    <div className='py-10'>
      <Marquee images={images[0]} />
      <Marquee images={images[1]} />
    </div>
  )
}

export default Marquees