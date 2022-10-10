import React, { useContext } from 'react'
import Card from '../Card/Card'
import './Education.css'
import heartEmoji from '../../img/assets/heartemoji.png'
import glasses from '../../img/assets/glasses.png'
import humble from '../../img/assets/humble.png'
import Resume from './Adarsh Urmaliya Resume.pdf'
import { themeContext } from '../../Context'

const Education = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id='Services'>
      <div className="awesome">
        <span style={darkMode? {color:'#ffffff'}:{}}>My Education &</span>
        <span>Skills</span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br /> Neque distinctio, voluptatum commodi quasi provident!</span>
        <a href={Resume} download>
          <button className='btn s-btn'>Download CV</button>
        </a>
        <div className="blur s-blur1"/>
        <div className="blur s-blur2"/>

      </div>  
      <div className="cards">
        <div style={{right:'14rem'}}>
          <Card emoji={heartEmoji} heading={'Design'} detail={"Figma, Canva, Bootstrap, Tailwind Css"}/>
        </div>

        <div style={{left:'-37rem', top:"10rem"}}>
          <Card emoji={glasses} heading={'Developer'} detail={"Html, Css, JavaScript, React Js, Node Js, Frame Js"}/>
        </div>

        <div style={{top:"19rem",left:'-20rem'}}>
          <Card emoji={humble} heading={'Languages & Tools'} detail={"C++, Git, Firebase, MongoDB, Android"}/>
        </div>

      </div>
    </div>
  )
}

export default Education