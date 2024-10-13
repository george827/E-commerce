import React from 'react'
import './Footer.css'
import logo from '../assets/Frontend_Assets/logo_big.png'
import Ig from '../assets/Frontend_Assets/instagram_icon.png'
import pintester from '../assets/Frontend_Assets/pintester_icon.png'
import Whatsapp from '../assets/Frontend_Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
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
                <img src={Ig} alt="isntagram-icon" />
            </div>
            <div className="footer-icons-container">
                <img src={pintester} alt="isntagram-icon" />
            </div>
            <div className="footer-icons-container">
                <img src={Whatsapp} alt="isntagram-icon" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>copyright @ 2024 - All right Reserved.</p>
        </div>
        </div>
  )
}

export default Footer