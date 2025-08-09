import React, { useContext } from "react";
import "./CartItems.css";
import remove_icon from "../assets/Frontend_Assets/cart_cross_icon.png";
import { ShopContext } from "../../context/ShopContext";

export const CartItems = () => {
  const { getTotalCartAmount, all_products, cartItem, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quatity</p>
        <p>Total</p>
        <p>remove</p>
      </div>
      <hr />
      {all_products.map((e, i) => {
        if (cartItem[e.id] > 0)
          return (
        <div>
            <div className="cartitems-format cartitems-format-main" key={i}>
              <img src={e.image} alt={e.name} className="carticon-product-icon" />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className="cartitems-quantity">{cartItem[e.id]}</button>
              <p>${e.new_price * cartItem[e.id]}</p>
              <img
                onClick={() => removeFromCart(e.id)}
                src={remove_icon}
                alt="remove icon"
                className="cartitems-remove-icon"
              />
            </div>
            <hr />
          </div>
          );
          return null; // If the quantity is 0, do not render the item

      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>
                Cart Totals
            </h1>
            <div>
                <div className="cartsitems-total-item">
                    <p>SunTotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartsitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartsitems-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="CARTITEMS-PROMOCODE">
            <p>If you have a promocode, Enter it here </p>
            <div className="cartitems-promobox">
                <input type="text" placeholder="promo code"/>
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};
