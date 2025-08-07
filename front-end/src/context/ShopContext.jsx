import React, { createContext } from 'react'
import all_products from '../components/assets/Frontend_Assets/all_product'

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const contextValue ={all_products};

    const getDefaultCart = () => {
        let cart = {};
        for (let i = 0; i < all_products.length + 1; i++) {
            cart[i] = 0; // Initialize each product's quantity to 0
        }
        return cart;
    }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;