import React, { createContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    // alert("Product added to your cart!");
    toast("Product added to your Card!");
  };

  const removeFromCart = (productToRemove) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productToRemove.id)
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>

  );
};
