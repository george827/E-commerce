import React, { useState } from "react";
import "./Navbar.css";
// import logo from "../assets/Frontend_Assets/autowuigLogo.png";
import logo2 from "../assets/Frontend_Assets/autowuigLogo2.png";
import cart_icon from "../assets/Frontend_Assets/cart_icon.png";
import { Link } from "react-router-dom";
// autowuigLogo, logo

function Navbar() {
  const [menu, setmenu] = useState("shop"); 

  return (
    <div className="navbar">
      <div className="nav-logo">
        {/* <img src={logo} alt="logo" className="autowuig-Logo" /> */}
        <img src={logo2} alt="logo" className="autowuig-Logo" />
      </div>
      <ul className="nav-menu">
        <li onClick={()=> {setmenu("shop")}}> <Link className='Nav-link' to='/'>Shop</Link> {menu==="shop"? <hr/> : <></>}</li>
        <li onClick={()=> {setmenu("men")}}><Link className='Nav-link' to='/Men'>Men</Link> {menu==="men"? <hr/> : <></>}</li>
        <li onClick={()=> {setmenu("women")}}><Link className='Nav-link' to='/Women'>Women</Link>{menu==="women"? <hr/> : <></>}</li>
        <li onClick={()=> {setmenu("kids")}}><Link className='Nav-link' to='/Kids'>Kids</Link> {menu==="kids"? <hr/> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'> <button>Login</button> </Link>
        <Link to='/cart'> <img src={cart_icon} alt="cart-icon" /></Link>
        <div className="nav-cart-count">
            <p>0</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
