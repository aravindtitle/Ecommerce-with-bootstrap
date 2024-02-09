// Cart.js
import React, { useContext } from "react";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <div>
              <img
                src={item.imageUrl}
                alt={item.title}
                style={{ width: "50px", height: "50px" }}
              />
              <div>
                <p>{item.title}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <p>Total Price: ${getTotalPrice()}</p>
    </div>
  );
};

export default Cart;
