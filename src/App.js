// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Components/Cart/CartContext";
import ProductsScreen from "./Components/ProductScreen";
import CartIcon from "./Components/Cart/CartIcon";
import Navigation from "./Components/Navigation";
import About from "./Pages/About";

export default function App() {
  return (
    <Router>
      <CartProvider>
        <div>
          <Navigation />
          <div className="container">
            <Routes>
              {" "}
              {/* Wrap your Route components within a Routes container */}
              <Route path="/" element={<ProductsScreen />} />{" "}
              {/* Use the 'element' prop */}
              <Route path="/about" element={<About />} />{" "}
              {/* Use the 'element' prop */}
            </Routes>
          </div>
        </div>
      </CartProvider>
    </Router>
  );
}
