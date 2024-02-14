// ProductPage.js
import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap"; // Import necessary Bootstrap components

const ProductPage = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Container>
      <h2>{product.title}</h2>
      <Row>
        {product.images.map((image, index) => (
          <Col key={index} xs={6} md={4} lg={3}>
            <Image src={image} alt={`Product ${index}`} fluid />
          </Col>
        ))}
      </Row>
      <h3>Reviews</h3>
      <ul>
        {product.reviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>
    </Container>
  );
};

export default ProductPage;
