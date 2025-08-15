import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../assets/Frontend_Assets/star_icon.png";
import star_dull_icon from "../assets/Frontend_Assets/star_dull_icon.png";
import { ShopContext } from '../../context/ShopContext';

export const ProductDisplay = (props) => {
  const {product} = props;
  const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay-container'>
        <div className="productdisplay-left">
          <div className="display-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          <div className="product-disp-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
          </div>
        </div>
        <div className="productdisplay-right">
          <h1>{product.name}</h1>
          <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
          </div>
          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-prices-old">
              ${product.old_price}
            </div>
            <div className="productdisplay-right-prices-new">
              ${product.new_price}
            </div>
          </div>
          <div className="productdisplayright-description">
            A short description of the product goes here. It should be concise and informative, highlighting the key features and benefits of the product.
          </div>
          <div className="productdisplay-right-size">
            <h1>select size</h1>
            <div className="productdisplay-right-sizes">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
          <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
          <p className="productdisplay-right-category"> <span>Category :</span> Women, T-shirt, Crop Top</p>
          <p className="productdisplay-right-category"> <span>Tags :</span> Modern, Latest</p>
        </div>
    </div>
  )
}
