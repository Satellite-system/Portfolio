import React, { useContext } from 'react'
import './Works.css'
import UpWork from '../../img/assets/Upwork.png'
import fiverr from '../../img/assets/fiverr.png'
import amazon from '../../img/assets/amazon.png'
import shopify from '../../img/assets/Shopify.png'
import facebook from '../../img/assets/Facebook.png'
import { themeContext } from '../../Context'
import { Link } from 'react-scroll'

function Works() {
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;

  return (
    <div className="works">
      <div className="awesome">
        <span style={darkMode?{color:'#ffffff'}:{}}>Work Experience</span>
        <span>Brands & Clients</span>
        <span>Worked in Domain of Web, Android & IOS App Development..</span>
        <div className="w-job"> 
            <div className="w-heading">
               <span>Product Engineer</span>
               <span>Oct 2022 - Present</span>
            </div>
            <span> vInnovate Technologies</span>
         </div>
        <div className="w-job"> 
            <div className="w-heading">
               <span>Full Stack Development Intern</span>
               <span>June 2022 - Oct 2022</span>
            </div>
            <span>Pinch App.in</span>
            <ul>
               <li>Implemented various APIs at Front End.</li>
               <li>Worked upon Front End to Construct modern Responsive Designs for all types Android/IOS Screens .</li>
               <li>Attend regular meetings with the Back end team to expose weaknesses and problems.</li>
               <li>Routinely inspect server code for speed optimization.</li>
            </ul>
        </div>
        <div className="w-job"> 
            <div className="w-heading">
               <span>MERN Stack Developer Intern</span>
               <span>Oct 2021 - Jan 2022</span>
            </div>
            <span>Optimum Wellness</span>
            <ul>
               <li>Planned whole backend and Frontend.</li>
               <li>Determined the primary perpose of web site and planned services according to that.</li>
               <li>Attend regular meetings with Client team to discuss needs.</li>
               <li>Tested and Published business website.</li>
            </ul>
        </div>
          
         <Link spy={true} smooth={true} to='Contact'>
            <button className='btn s-btn'>Contact Me</button> 
         </Link>
         <div className="blur s-blur1"/>
         <div className="blur s-blur2"/>
      </div>


      
      {/* <div className="w-right">
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
       {/*  <div className="w-backCircle blueCircle"/> 
         <div className="w-backCircle yellowCircle"/> 
      </div>  */}
    </div>
  )
}

export default Works