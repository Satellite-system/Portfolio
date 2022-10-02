import React from 'react'
import './FloatingDiv.css'

const FloatingDiv = (props) => {
  return (
    <div className="f-wrapper">
      <img src={props.img} />
      {props.txt1 && 
      <span>
         {props.txt1}
         <br/>
         {props.txt2}
      </span>
      }
    </div>
  )
}

export default FloatingDiv