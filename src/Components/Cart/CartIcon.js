import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import { Button, Col, Row, Badge } from "react-bootstrap";
import cartImage from "./Cart.jpg";
import Cart from "./Cart";

const CartIcon = () => {
  const { cartItems } = useCart(); // Use the useCart hook to access cartItems from context

  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleClick = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  // Calculate total count of items in the cart
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="position-fixed top-0 end-0 m-3">
      <Button variant="light" className="cart-button" onClick={handleClick}>
        <img
          src={cartImage}
          alt="Cart"
          className="cart-icon"
          width="24"
          height="24"
        />
        {cartCount > 0 && <Badge bg="secondary">{cartCount}</Badge>}
      </Button>
      {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
    </div>
  );
};

export default CartIcon;
