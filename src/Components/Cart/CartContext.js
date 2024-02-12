import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch(
          "https://crudcrud.com/api/0170161c720044b2a7ded6015587f1fe/cart"
        );
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  const addToCart = async (item) => {
    try {
      const existingItemIndex = cartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItemIndex !== -1) {
        // If the item already exists in the cart, update its quantity
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingItemIndex] = {
          ...updatedCartItems[existingItemIndex],
          quantity: updatedCartItems[existingItemIndex].quantity + 1,
        };
        setCartItems(updatedCartItems);

        // Update cart item on the server
        await fetch(
          `https://crudcrud.com/api/0170161c720044b2a7ded6015587f1fe/cart/${cartItems[existingItemIndex]._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedCartItems[existingItemIndex]),
          }
        );
      } else {
        // If the item does not exist in the cart, add it as a new entry
        setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);

        // Add new item to cart on the server
        await fetch(
          "https://crudcrud.com/api/0170161c720044b2a7ded6015587f1fe/cart",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...item, quantity: 1 }),
          }
        );
      }
      console.log("Cart items successfully updated on the server.");
    } catch (error) {
      console.error("Error updating cart items on the server:", error);
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      // Remove item locally from the cart
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== itemId)
      );

      // Remove item from the server
      await fetch(
        `https://crudcrud.com/api/0170161c720044b2a7ded6015587f1fe/cart/${itemId}`,
        {
          method: "DELETE",
        }
      );

      console.log("Item removed from the cart on the server.");
    } catch (error) {
      console.error("Error removing item from the cart on the server:", error);
    }
  };

  const clearCart = async () => {
    try {
      // Clear cart locally
      setCartItems([]);

      // Clear cart on the server
      await fetch(
        "https://crudcrud.com/api/0170161c720044b2a7ded6015587f1fe/cart",
        {
          method: "DELETE",
        }
      );

      console.log("Cart cleared on the server.");
    } catch (error) {
      console.error("Error clearing cart on the server:", error);
    }
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
