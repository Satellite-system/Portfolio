import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import { Link } from 'react-scroll'

function Navbar() {
  return (
    <div className="n-container">
      <div className="n-left">
         <div className="n-name">Adarsh</div>
         <span><Toggle/></span>
      </div>
      <div className="n-right">
         <div className="n-list">
            <ul>
               <li> <Link spy={true} smooth={true} to='Navbar'>Home</Link> </li>
               <li><Link spy={true} smooth={true} to='Services'>Services</Link> </li>
               <li><Link spy={true} smooth={true} to='Experience'>Experience</Link></li>
               <li><Link spy={true} smooth={true} to='Portfolio'>Porfolio</Link> </li>
               <li><Link spy={true} smooth={true} to='Testimonial'>Testimonial</Link> </li>
            </ul>
            
            <button className="btn n-btn"><Link spy={true} smooth={true} to='Contact'>Contact</Link></button>
         </div>
      </div>
    </div>
  )
}

export default Navbar