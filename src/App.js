import React, { useState, useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useHistory,
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
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const productsArr = [];

const firebaseConfig = {
  apiKey: "AIzaSyDll9GLS_DagY9AKtLdE1skrN0MHQgsw5A",
  authDomain: "logging-page-53cb2.firebaseapp.com",
  projectId: "logging-page-53cb2",
  storageBucket: "logging-page-53cb2.appspot.com",
  messagingSenderId: "289284890131",
  appId: "1:289284890131:web:11e1c4b7d3fbdfd91be9e6",
  measurementId: "G-ZCBH215B6J",
};

firebase.initializeApp(firebaseConfig);

const AuthContext = React.createContext();

const App = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    // Update local storage when token changes
    localStorage.setItem("token", token);
  }, [token]);

  const handleLogin = async (email, password) => {
    try {
      const userCredential = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      setUser(userCredential.user);
      setError(null);
      const idToken = await userCredential.user.getIdToken();
      setToken(idToken);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogout = () => {
    firebase.auth().signOut();
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, handleLogin, handleLogout }}>
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
            <Route path="/contactus" component={ContactUs} />
            <Route path="/login">
              <LoginPage onLogin={handleLogin} error={error} />
            </Route>
          </Switch>
          <CartIcon />
        </CartProvider>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
