import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>GET EXCLUSSIVE OFFER ON YOUR EMAIL</h1>
      <p>subscribe to our news letter and stay updated</p>
      <div>
        <input type="email" placeholder="Your Email Id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
