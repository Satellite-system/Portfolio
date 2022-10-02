import React from 'react'
import Card from '../Card/Card'
import './Services.css'
import heartEmoji from '../../img/heartemoji.png'
import glasses from '../../img/glasses.png'
import humble from '../../img/humble.png'
import Resume from './Adarsh Urmaliya Resume.pdf'

const Services = () => {
  return (
    <div className="services">
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Neque distinctio, voluptatum commodi quasi provident rerum!</span>
          <a href={Resume} download>
          <button className='btn s-btn'>Download CV</button>
          </a>
          <div className="blur s-blur1"/>
          <div className="blur s-blur2"/>

      </div>  
      <div className="cards">
        <div style={{right:'14rem'}}>
          <Card emoji={heartEmoji} heading={'Design'} detail={"Figma, Sketch, Photoshop, Adobe"}/>
        </div>

        <div style={{left:'-37rem', top:"10rem"}}>
          <Card emoji={glasses} heading={'Developer'} detail={"Html,Css, JavaScript, React Js"}/>
        </div>

        <div style={{top:"19rem",left:'-20rem'}}>
          <Card emoji={humble} heading={'UI/UX'} detail={"Lorem ipsum dolor sit amet consectetur"}/>
        </div>

      </div>
    </div>
  )
}

export default Services