// ProductCard.js
import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { useCart } from "./Cart/CartContext";
import { Link } from "react-router-dom";

const ProductCard = ({ id, title, price, imageUrl }) => {
  // Add 'id' prop
  const { addToCart } = useCart();

  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={imageUrl} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Price: ${price}</Card.Text>
        {/* Add Link to product detail page */}
        <Link to={`/product/${id}`} className="btn btn-primary">
          View Details
        </Link>
        <Button
          variant="primary"
          onClick={() => addToCart({ id, title, price, imageUrl })} // Include 'id' in addToCart
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
