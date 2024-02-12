import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h1 className="text-center bg-brown text-white p-3">The Generics</h1>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h2 className="text-center border border-blue p-3">
            Get Our Latest Album
          </h2>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h2>Tours</h2>
          <p>JUL16 DETROIT, MI DTE ENERGY MUSIC THEATRE </p>
          <Button variant="primary">Buy Tickets</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
