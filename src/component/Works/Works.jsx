import React from 'react'
import './Works.css'
import UpWork from '../../img/Upwork.png'
import fiverr from '../../img/fiverr.png'
import amazon from '../../img/amazon.png'
import shopify from '../../img/Shopify.png'
import facebook from '../../img/Facebook.png'
import { upload } from '@testing-library/user-event/dist/upload'

function Works() {
  return (
    <div className="works">
      <div className="awesome">
        <span>Works for All these</span>
        <span>Brands & Clients</span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem, ipsum dolor..
         <br /> 
          Neque distinctio, voluptatum Lorem, ipsum.!
          <br /> 
          Neque distinctio, voluptatum commodi quasi provident rerum!
          <br /> 
          Lorem ipsum dolor sit amet consectetur.
          
         </span>
         <button className='btn s-btn'>Hire Me</button>
         <div className="blur s-blur1"/>
         <div className="blur s-blur2"/>
      </div>

      <div className="w-right">
         <div className="w-main-circle">
            <div className="w-circle w-center ">
               <img src={amazon} alt="" />
            </div>   
            <div className="w-circle w-top">
               <img src={UpWork} alt="" />
            </div>
            <div className="w-circle w-bottom">
               <img src={facebook} alt="" />
            </div>
            <div className="w-circle w-left">
               <img src={fiverr} alt="" />
            </div>
            <div className="w-circle w-r">
               <img src={shopify} alt="" />
            </div>
         </div>

         {/* Background Circles */}
         <div className="w-backCircle blueCircle"/> 
         <div className="w-backCircle yellowCircle"/> 
      </div>
    </div>
  )
}

export default Works