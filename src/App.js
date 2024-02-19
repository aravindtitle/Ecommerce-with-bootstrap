import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { CartProvider } from "./Components/Cart/CartContext";
import CartIcon from "./Components/Cart/CartIcon";
import Navigation from "./Components/Navigation";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Store from "./Pages/Store";
import ContactUs from "./Pages/ContactUs";
import ProductPage from "./Pages/ProductPage";
import LoginPage from "./Pages/LoginPage";
import axios from "axios"; // Import axios for making HTTP requests
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID",
};

firebase.initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const addToCart = async (product) => {
    try {
      // Check if user is logged in
      if (!user) {
        throw new Error("User is not logged in");
      }

      // Add product to cart using crudcrud.com API
      await axios.post(
        `https://crudcrud.com/api/62ccd67ba3e14d7cabf6ad4c3048be2d/cart/${user.email}`,
        product
      );
    } catch (error) {
      setError(error.message);
    }
  };

  const getCartItems = async () => {
    try {
      // Check if user is logged in
      if (!user) {
        throw new Error("User is not logged in");
      }

      // Retrieve cart items using crudcrud.com API
      const response = await axios.get(
        `https://crudcrud.com/api/62ccd67ba3e14d7cabf6ad4c3048be2d/cart/${user.email}`
      );
      return response.data;
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Router>
      <CartProvider addToCart={addToCart} getCartItems={getCartItems}>
        <Navigation user={user} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/store" component={Store} user={user} />
          <PrivateRoute
            path="/product/:productId"
            component={ProductPage}
            user={user}
          />
        </Switch>
        <CartIcon />
      </CartProvider>
    </Router>
  );
};

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default App;
