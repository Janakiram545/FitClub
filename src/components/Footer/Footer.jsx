import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png';
import Linkedin from '../../assets/linkedin.png';
import Instagram from '../../assets/instagram.png';
import Logo from '../../assets/logo.png';
import { Link } from 'react-scroll'


const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
        <a href="https://github.com/Janakiram545" target="_blank" rel="noopener noreferrer">
        <img src={Github} alt="" className="social-icon"/></a>
        <a href="https://www.linkedin.com/in/janakiram-chandu5/" target="_blank" rel="noopener noreferrer"></a>
        <img src={Linkedin} alt="" className="social-icon"/>
        <a href="https://www.instagram.com/Janakiram_chandu_09" target="_blank" rel="noopener noreferrer"></a>
        <img src={Instagram} alt="" className="social-icon"/>
      </div>
      <div className="logo-f">
        <img src={Logo} alt="" />
      </div>
      
      </div>

      <div className="blur-f-1"></div>
      <div className="blur-f-2"></div>
    </div>
  )
}

export default Footer;