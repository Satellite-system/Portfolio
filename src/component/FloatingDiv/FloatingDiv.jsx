import React, { useContext } from 'react'
import './FloatingDiv.css'
import { themeContext } from '../../Context'

const FloatingDiv = (props) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="f-wrapper">
      <img src={props.img} />
      {props.txt1 && 
      <span >
         {props.txt1}
         <br/>
         {props.txt2}
      </span>
      }
    </div>
  )
}

export default FloatingDiv