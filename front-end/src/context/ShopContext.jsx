import React, { createContext } from 'react'
import AllProduct from '../components/assets/Frontend_Assets/all_product'

export const ShopContext = createContext(null);

const shopContextProvider = (props) => {
    const contextValue ={AllProduct};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default shopContextProvider;
{
    push = {"marie": "
      
