import React from 'react'
import CTA from './CTA'
import HeaderSocial from './HeaderSocials'
import ME from '../../assets/rayen-removebg-preview.png'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className='upper-header'>
          <h5>Hello I'm</h5>
          <h1 className='rayen-belkhouja'>Rayen Belkhouja</h1>
          <h5 className="text-light">Frontend Developer</h5>
        </div>
        
        <CTA />
        <HeaderSocial />


        <div className='me'>
          <img src={ME} alt="me" />
        </div>
 
        <a href="#contact" className='scroll-down'>Scroll Down &#x2794; </a>
      </div>
    </header>
  )
}

export default Header