// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CartProvider } from "./Components/Cart/CartContext";
import CartIcon from "./Components/Cart/CartIcon";
import Navigation from "./Components/Navigation";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Store from "./Pages/Store";
import ProductPage from "./Pages/ProductPage"; // Import the ProductPage component

const productsArr = [
  /* your product data here */
];

const App = () => {
  return (
    <Router>
      <CartProvider>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/store" component={Store} />
          <Route path="/about" component={About} />
          <Route path="/product/:productId">
            <ProductPage products={productsArr} />
          </Route>
        </Switch>
        <CartIcon />
      </CartProvider>
    </Router>
  );
};

export default App;
