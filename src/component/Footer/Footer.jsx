import React from 'react'
import './Footer.css'
import Wave from '../../img/assets/wave.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
   <div className="footer">
       <img src={Wave} alt="" />
      <div className="f-content">
         <span>adarshurmaliya@gmail.com</span>
         <div className="f-icons">
         <a href='https://github.com/Satellite-system'><GitHubIcon style={{color:'#ffffff',fontSize: '4rem'}}/></a>
         <a href='https://www.linkedin.com/in/adarsh-urmaliya-6008201aa/'><LinkedInIcon style={{color:'#ffffff',fontSize: '4rem'}}/></a>
         </div>
      </div>
   </div>
  )
}

export default Footer;