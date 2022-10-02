import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <div className="card">
      <img src={props.emoji} alt="" />
      <span>{props.heading}</span>
      <span>{props.detail}</span>
      <button className="c-btn">Learn More</button>
    </div>
  )
}

export default Card