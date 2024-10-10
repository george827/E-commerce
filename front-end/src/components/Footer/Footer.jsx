import React from 'react'
import './Footer.css'
import logo from '../assets/Frontend_Assets/logo_big.png'

const Footer = () => {
  return (
    <div className='gooter'>
        <div className="footer-logo">
            <img src={logo} alt="logo" />
            <p>Shopper</p>
        </div>
        <ul className="footer-links">
            <li>company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                
            </div>
        </div>
        </div>
  )
}

export default Footer