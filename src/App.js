// App.js
import React from "react";
import { CartProvider } from "./Components/Cart/CartContext";
import ProductsScreen from "./Components/ProductScreen";
import CartIcon from "./Components/Cart/CartIcon";

export default function App() {
  return (
    <CartProvider>
      <div className="container">
        <ProductsScreen />
        <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
          <CartIcon />
        </div>
      </div>
    </CartProvider>
  );
}
