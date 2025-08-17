import React from 'react'
import './NavBar.css'
import navLogo from '../../assets/Admin_Assets/nav-logo.svg'
import navProfile from '../../assets/Admin_Assets/nav-profile.svg' 

export const NavBar = () => {
  return (
    <div className='navbar'>
      <img src={navLogo} alt="Logo" className="nav-logo" />
      <img src={navProfile} alt="Profile" className="nav-profile" />
    </div>
  )
}
