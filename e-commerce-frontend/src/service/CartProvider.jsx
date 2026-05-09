import React, { createContext, useState } from 'react'
import { createContext } from 'react';


export const CartContext=createContext();

const CartProvider = ({children}) => {
    const  [items,setItems]=useState([]);
    const addToCart=(product)=>{
        cartProduct=items.some((item)=>item.id==product.id)
        if(!cartProduct){
            setItems([...items,product]);
    };
};
  return (
    <CartContext.Provider value={{items,addToCart}}>
        {children}
    </CartContext.Provider>
  );
};

export default CartProvider;