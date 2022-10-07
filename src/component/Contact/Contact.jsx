import React,{useContext, useRef, useState} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';

function Contact() {
   const form = useRef();
   const [send, setSend] = useState(false);
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [msg, setMsg] = useState('');

   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;

  const sendEmail = (e) => {
    e.preventDefault();

    if(msg==='' || name==='' || email==''){
      console.log("empty");
    } 
    else{
      console.log("Name", name,"\nEmail: ", email,"\nMsg: ",msg);
      emailjs.sendForm('service_z3g0s0d', 'template_wwed1vc', form.current, 'yNf9DbrSYQkZjZrd3')
         .then((result) => {
            console.log(result.text);
            setSend(true); 
            setEmail('');
            setName('');
            setMsg('');
         }, (error) => {
            console.log(error.text);
         });
      
   }
  };

  const handleNameChange = (e)=>{
      setName(e.target.value);
  }
  const handleEmailChange = (e)=>{
      setEmail(e.target.value);
  }
  const handleMsgChange = (e)=>{
      setMsg(e.target.value);
  }

  return (
    <div className="contact" id='Contact'>
      <div className="contact-left">
         <div className="awesome">
            <span style={darkMode?{color:"#ffffff"}:{}}>Get in Touch</span>
            <span>Contact me</span>
            <div className="blur s-blur1" style={{background:"#ABF1FF94"}}/>
         </div>
      </div>
      <div className="contact-right">
         <form ref={form} onSubmit={sendEmail}>
            <input type="text" value={name} onChange={handleNameChange} name='from_name' className='user' placeholder='Name'/>
            <input type="email" value={email} onChange={handleEmailChange} name='user_email' className='user' placeholder='Email' />
            <textarea name='message' value={msg} onChange={handleMsgChange} className='user' placeholder='Message' />
            <input type='submit' value='Send' className="btn" />
            <span>{send && "Thanks for Contacting me."}</span>
            <div className="blur contact-blur1"></div>
         </form>
      </div>
    </div>
  );
};

export default Contact