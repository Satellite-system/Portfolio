import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className="contact">
      <div className="contact-left">
         <div className="awesome">
            <span>Get in Touch</span>
            <span>Contact me</span>
            <div className="blur s-blur1" style={{background:"#ABF1FF94"}}/>
         </div>
      </div>
      <div className="contact-right">
         <form >
            <input type="text" name='user_name' className='user' placeholder='Name'/>
            <input type="email" name='user_email' className='user' placeholder='Email' />
            <textarea name='message' className='user' placeholder='Message' />
            <input type='submit' value='Send' className="btn" />
            <div className="blur contact-blur1"></div>
         </form>
      </div>
    </div>
  );
};

export default Contact