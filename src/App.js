import React, { useState, useEffect, useContext } from "react";
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
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const productsArr = [];

const firebaseConfig = {
  // Your Firebase configuration
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
            <Route path="/about" component={About} />
            <Route path="/contactus" component={ContactUs} />
            <Route path="/login">
              <LoginPage onLogin={handleLogin} error={error} />
            </Route>
            <PrivateRoute path="/store" component={Store} />{" "}
            {/* Use PrivateRoute for the products page */}
            <Route path="/product/:productId" component={ProductPage} />
          </Switch>
          <CartIcon />
        </CartProvider>
      </Router>
    </AuthContext.Provider>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);

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
