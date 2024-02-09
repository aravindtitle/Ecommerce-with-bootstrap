// Navigation.js
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav style={{ backgroundColor: "black", color: "white" }}>
      <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
        <li style={{ display: "inline", marginRight: "10px" }}>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Home
          </Link>
        </li>
        <li style={{ display: "inline", marginRight: "10px" }}>
          <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
            About
          </Link>
        </li>
        <li style={{ display: "inline", marginRight: "10px" }}>
          <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
            Cart
          </Link>{" "}
          {/* Add cart link */}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
