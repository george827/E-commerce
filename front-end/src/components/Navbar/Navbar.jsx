import React from "react";
import { useState } from "react";
import "./Navbar.css";
import Logo from "../assets/Frontend_Assets/logo.png";
import cart_icon from "../assets/Frontend_Assets/cart_icon.png";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={Logo} alt="logo"/>
        <p>shopper</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=> {setMenu("shop")}}>
          shop {menu==="mens"? <hr/> : <></>}
        </li>
        <li onClick={()=> {setMenu("mens")}}>men{menu==="mens"? <hr/> : <></>}</li>
        <li onClick={()=> {setMenu("women")}}>women{menu==="women"? <hr/> : <></>}</li>
        <li onClick={()=> {setMenu("kids")}}>kids{menu==="kids"? <hr/> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <button>login</button>
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};
