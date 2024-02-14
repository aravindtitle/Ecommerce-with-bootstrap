import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      // If the item already exists in the cart, update its quantity
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedCartItems);
    } else {
      // If the item does not exist in the cart, add it as a new entry
      setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
    console.log("Cart items successfully updated.");
  };

  const removeFromCart = (itemId) => {
    // Remove item locally from the cart
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    console.log("Item removed from the cart.");
  };

  const clearCart = () => {
    // Clear cart locally
    setCartItems([]);
    console.log("Cart cleared.");
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
