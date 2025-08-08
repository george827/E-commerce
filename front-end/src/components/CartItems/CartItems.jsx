import React, {useContext} from 'react'
import './CartItems.css'
import remove_icon from '../assets/Frontend_Assets/cart_cross_icon.png'

export const CartItems = () => {
    const {all_products, CartItems, removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quatity</p>
            <p>Total</p>
            <p>remove</p>
        </div>
        <hr />
        {all_products.map((e) => {
            if(CartItems[e.id]> 0)
            return (
                <div className="cartitems-format" key={i}>
                    <img src={e.image} alt="cart item" />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitems-quantity'>{CartItems[e.id]}</button>
                    <p>{e.new_price * CartItems[e.id]}</p>
                    <img onClick={() => removeFromCart(e.id)} src={remove_icon} alt="remove icon" />
                </div>
            )
        })}
    </div>
  )
}
