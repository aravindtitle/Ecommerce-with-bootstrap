import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">FlopKart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Row>
              <Col>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link as={Link} to="/store">
                  Store
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link as={Link} to="/Login">
                  Login
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link as={Link} to="/contact-us">
                  Contact Us
                </Nav.Link>
              </Col>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
