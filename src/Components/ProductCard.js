// ProductCard.js
import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { useCart } from "./Cart/CartContext";

const ProductCard = ({ title, price, imageUrl }) => {
  const { addToCart } = useCart();

  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={imageUrl} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Price: ${price}</Card.Text>
        <Button
          variant="primary"
          onClick={() => addToCart({ title, price, imageUrl })}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
