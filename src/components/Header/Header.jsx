import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
const Header = () => {
  const handleHome=()=>{window.scrollTo({top:80,behavior:'smooth'})}
  const handleprograms=()=>{window.scrollTo({top:730,behavior:'smooth'})}
  const handlewhy=()=>{window.scrollTo({top:1160,behavior:'smooth'})}
  const handlecoach=()=>{window.scrollTo({top:1730,behavior:'smooth'})}
  const handlePlans=()=>{window.scrollTo({top:2300,behavior:'smooth'})}
  const handleTest=()=>{window.scrollTo({top:3050,behavior:'smooth'})}
  const handleContact=()=>{window.scrollTo({top:2700,behavior:'smooth'})}
  return (
    <div className='he'>
        <div className="header">
        
        <img src={Logo} alt="" className='logo'/>
      

        <div className='header-menu-main'>

        <ul className='header-menu'>
            <li onClick ={handleHome} >Home</li>
            <li onClick={handleprograms}>Programs</li>
            <li onClick={handlewhy}>Why Us</li>
            <li onClick={handlecoach}>Coach</li>
            <li onClick={handlePlans}>Plans</li>
            <li onClick={handleTest}>Testimonials</li>
            <li onclick={handleContact}>Contact us</li>
        </ul>
        </div>
    </div>
    </div>
    
  )
}

export default Header