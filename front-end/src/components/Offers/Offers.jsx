import React from 'react'
import './Offers.css'
import ExclusiveImage from '../assets/Frontend_Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>offers For you</h1>
            <p>Only On Best Sellers Product</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={ExclusiveImage} alt="exclusive_image" />
        </div>

    </div>
  )
}

export default Offers;