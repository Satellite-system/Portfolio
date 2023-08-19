import React, { useContext } from 'react'
import { themeContext } from '../../Context'
import './Experience.css'

function Experience() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='Experience'>
      <div className="achievement">
         <div className="circle">1+</div>
         <span style={darkMode?{color:"#ffffff"}:{}}>years</span>
         <span>Experience</span>
      </div>
      <div className="achievement">
         <div className="circle">15+</div>
         <span style={darkMode?{color:"#ffffff"}:{}}>completed</span>
         <span>Projects</span>
      </div>
      <div className="achievement">
         <div className="circle">3</div>
         <span style={darkMode?{color:"#ffffff"}:{}}>companies</span>
         <span>Work</span>
      </div>
    </div>
  )
}

export default Experience