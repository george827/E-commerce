import React from "react";
import "./Navbar.css";
import Logo from "../assets/Frontend_Assets/logo.png";
import cart_icon from "../assets/Frontend_Assets/cart_icon.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={Logo} alt="logo" />
        <p>shopper</p>
      </div>
      <ul className="nav-menu">
        <li>shop <hr/> </li>
        <li>men</li>
        <li>women</li>
        <li>kids</li>
      </ul>
      <div className="nav-login-cart">
        <button>login</button>
        <img src={cart_icon} alt="" />
      </div>
    </div>
  );
};
