import React, { useContext } from 'react'
import './Works.css'
import UpWork from '../../img/assets/Upwork.png'
import fiverr from '../../img/assets/fiverr.png'
import amazon from '../../img/assets/amazon.png'
import shopify from '../../img/assets/Shopify.png'
import facebook from '../../img/assets/Facebook.png'
import { themeContext } from '../../Context'

function Works() {
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;

  return (
    <div className="works">
      <div className="awesome">
        <span style={darkMode?{color:'#ffffff'}:{}}>Work Experience</span>
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