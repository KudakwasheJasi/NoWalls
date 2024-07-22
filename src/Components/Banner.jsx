import React from 'react'
import pictures from '../assets/IMAGES/hero1.png'
import hero2 from '../assets/IMAGES/hero2.png'
import hero3 from '../assets/IMAGES/hero3.png'
import hero4 from '../assets/IMAGES/hero4.png'
import hero5 from '../assets/IMAGES/hero5.png'


export const Banner = () => {
  return (
     
    <>
   <div className="banner-image">
      <div className="image-container">
    <img src= {pictures} alt="" />
    <img src= {hero2} alt="" />
    </div>
    <div className="images">
           <div className="pic-container">
           <img src= {hero3} alt="" />
          <div className="pic1">
          <img src= {hero4} alt="" />
    </div>
    <img src= {hero5} alt="" />

    </div>
    </div>
   </div>
    </>
  )
}

export default Banner
