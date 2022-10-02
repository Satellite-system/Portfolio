import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className="n-container">
      <div className="n-left">
         <div className="n-name">Adarsh</div>
         <span>Toggle</span>
      </div>
      <div className="n-right">
         <div className="n-list">
            <ul>
               <li>Home</li>
               <li>Services</li>
               <li>Experience</li>
               <li>Porfolio</li>
               <li>Testimonial</li>
            </ul>
            
            <button className="btn n-btn">Contact Me</button>
         </div>
      </div>
    </div>
  )
}

export default Navbar