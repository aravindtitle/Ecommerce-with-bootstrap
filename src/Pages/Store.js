import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProductList from "../Components/ProductList";
import CartIcon from "../Components/Cart/CartIcon";

const Store = () => {
  return (
    <Container>
      <h1 className="text-center mt-5">Our Store</h1>
      <ProductList />
      <CartIcon />
    </Container>
  );
};

export default Store;
