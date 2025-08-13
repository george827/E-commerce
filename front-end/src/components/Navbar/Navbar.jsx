import React, { useContext, useRef } from "react";
import { useState } from "react";
import "./Navbar.css";
import Logo from "../assets/Frontend_Assets/logo.png";
import nav_dropdown from "../assets/Frontend_Assets/nav_dropdown.png";
import cart_icon from "../assets/Frontend_Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const {cartCount} = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  }

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={Logo} alt="logo"/>
        <p>shopper</p>
      </div>
      <img onClick={dropdown_toggle} src={nav_dropdown} className="nav-dropdown" alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=> {setMenu("shop")}}>
        <Link to='/' className="nav-link">shop</Link>{menu==="shop"? <hr/> : <></>}
        </li>
        <li onClick={()=> {setMenu("mens")}}><Link to='/men' className="nav-link">men</Link> {menu==="mens"? <hr/> : <></>}</li>
        <li onClick={()=> {setMenu("women")}}><Link to='/women' className="nav-link">women</Link>{menu==="women"? <hr/> : <></>}</li>
        <li onClick={()=> {setMenu("kids")}}><Link to='/kids' className="nav-link">kids</Link>{menu==="kids"? <hr/> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>login</button></Link>        
        <Link to='/cart'>
        <img src={cart_icon} alt="" />
        </Link>        
        <div className="nav-cart-count">{cartCount()}</div>
      </div>
    </div>
  );
};
