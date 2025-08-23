import React, { createContext, useState, useEffect } from 'react'
import { use } from 'react';
// import all_products from '../components/assets/Frontend_Assets/all_product'

export const ShopContext = createContext(null);

const getDefaultCart = () => {
        let cart = {};
        for (let i = 0; i < 300 + 1; i++) {
            cart[i] = 0; // Initialize each product's quantity to 0
        }
        return cart;
    }

const ShopContextProvider = (props) => {

    const [cartItem, setCartItem] = useState(getDefaultCart());
    const [all_products, setAllProducts] = useState([]);

    useEffect(() => {
        // Fetch all products from the API or use the imported data
        const fetchProducts = async () => {
            const response = await fetch("http://localhost:4000/allproducts")
            .then(res => res.json())
            .then(data => {
                setAllProducts(data.products);
            });
        };
        fetchProducts();
        if (localStorage.getItem("token")) {
            fetch("http://localhost:4000/getcartdata", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setCartItem(data.cartData);
                }
            })
            .catch(err => {
                console.error("Error fetching cart data:", err);
            });
        }
    }, []);

    const addToCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        if (localStorage.getItem("token")) {
            fetch("http://localhost:4000/addtocart", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({ itemId })
            })
            .then(res => res.json())
            .then(data => {
                console.log("Product added");
            })
            .catch(err => {
                console.error("Error adding product to cart:", err);
            });
        }

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
        if (localStorage.getItem("token")) {
            fetch("http://localhost:4000/removecart", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({ itemId })
            })
            .then(res => res.json())
            .then(data => {
                console.log("Product removed from cart:");
            })
            .catch(err => {
                console.error("Error removing product from cart:", err);
            });
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                const product = all_products.find((product) => product.id === parseInt(item));
                totalAmount += cartItem[item] * product.new_price;
            }
        }
        return totalAmount;
    }

    const cartCount = () => {
        let count = 0;
        for (const item in cartItem) {
            count += cartItem[item];
        }
        return count;
    }

    const contextValue ={cartCount, getTotalCartAmount, all_products, cartItem, addToCart, removeFromCart};    

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;