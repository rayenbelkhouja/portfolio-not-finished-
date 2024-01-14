import React from 'react'
import { FaFacebookSquare , FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'
import KIRA from '../../assets/kira-signature.png'
import './footer.css'



const Footer = () => {
  return (
    <div className='container-footer'>
      <div>
      <a href="#" className='footer-logo'>
        <img className='footer-logo-image' src={KIRA}  />
      </a>
      </div>
     

      <div className='footer-links'>
          <div><a href="#" className='footer-link'> Home</a></div>
          <div><a href="#about" className='footer-link'> About </a></div>
          <div><a href="#experience" className='footer-link'> Experience </a></div>
        <div><a href="#services" className='footer-link'> Services </a></div>
        <div><a href="#portfolio" className='footer-link'> Portfolio </a></div>
        <div><a href="#testimonials" className='footer-link'>Testimonials</a></div>
        <div><a href="#contact" className='footer-link'>Contact</a></div>

        
      </div>

      <div className="footer-socials">
        <a className='footer-social' target='_blank' href="https://www.facebook.com/rayen.belkhouja.56/"><FaFacebookSquare /></a>
        <a className='footer-social' target='_blank' href="https://www.instagram.com/rayen_belkhouja/"><FaInstagramSquare/></a>
        <a className='footer-social' target='_blank' href="https://twitter.com/rayen_belkhouja"><FaTwitterSquare /></a>
      </div>
    </div>
  )
}

export default Footer