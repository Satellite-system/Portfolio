import React, { useContext } from 'react'
import './Intro.css'
import Github from './../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import gfg from '../../img/gfg.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';

function Intro() {
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;

  return (
    <div className="i-wrapper">
      <div className="i-left">
         <div className="i-name">
            <span style={darkMode?{color:'#ffffff'}:{}}>Hy! I am</span>
            <span>Adarsh Urmaliya</span>
            <span>an IT Student, Software Engineer and a Full Stack Developer in a perpetual state of learning new technologies. I love coding and creating new things. I'm always looking for new challenges. </span>
         </div>
         <button className="btn i-btn">Hire me</button>
         <div className="i-icons">
            <a href="http://github.com/Satellite-system">
            <img src={Github} alt="github"/></a>
            <a href="https://www.linkedin.com/in/adarsh-urmaliya-6008201aa/">
            <img src={Linkedin} alt="linkedin"/></a>
            <a href="https://auth.geeksforgeeks.org/user/zakarian17s">
            <img src={gfg} alt="gfg"/>
            </a>
         </div>
      </div>
      <div className="i-right">
         <img src={Vector1} alt=""/>
         <img src={Vector2} alt=""/>
         <img src={boy} alt="" />
         <img src={glassesimoji} className='i-img'/>
         <div className='i-div1'>
            <FloatingDiv img={crown} txt1={"Web"} txt2={"Developer"} />
         </div>
         <div className='i-div2'>
            <FloatingDiv img={thumbup} txt1={"Competitive"} txt2={"Programmer"} />
         </div>
         <div className="blur" style={{ background: "rgb(238 210 255)" }} />
         <div className="blur i-blur" />
      </div>
    </div>
  )
}

export default Intro