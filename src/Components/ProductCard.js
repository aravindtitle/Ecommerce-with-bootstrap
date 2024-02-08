import React from "react";
import { Card, Button } from "react-bootstrap"; // Assuming you're using React Bootstrap

const ProductCard = ({ title, price, imageUrl }) => {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={imageUrl} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Price: ${price}</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

const ProductList = ({ products }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ProductsScreen = () => {
  return (
    <div>
      <h1 className="text-center">Products</h1>
      <ProductList products={productsArr} />
    </div>
  );
};

export default ProductsScreen;
