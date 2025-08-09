import React, { createContext, useState } from 'react'
import all_products from '../components/assets/Frontend_Assets/all_product'

export const ShopContext = createContext(null);

const getDefaultCart = () => {
        let cart = {};
        for (let i = 0; i < all_products.length + 1; i++) {
            cart[i] = 0; // Initialize each product's quantity to 0
        }
        return cart;
    }

const ShopContextProvider = (props) => {

    const [cartItem, setCartItem] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    const removeFromCart = (itemId) => {
        setCartItem((prev) => {
            const newCart = { ...prev };
            if (newCart[itemId] > 0) {
                newCart[itemId] -= 1;
            }
            return newCart;
        }
        );
    }

    const contextValue ={all_products, cartItem, addToCart, removeFromCart};    
    console.log("cartitems data", cartItem);

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;