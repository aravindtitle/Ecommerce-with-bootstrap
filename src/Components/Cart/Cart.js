import React, { useState } from "react";

const Cart = ({ cartElements }) => {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const removeFromCart = (index) => {
    console.log("Removing item at index:", index);
  };

  return (
    <div>
      <button
        className="btn btn-dark position-fixed top-0 end-0 m-3"
        onClick={toggleCart}
      >
        Cart
      </button>
      {showCart && (
        <div className="card mt-3">
          <div className="card-header">Cart</div>
          <div className="card-body">
            {cartElements.map((item, index) => (
              <div key={index} className="d-flex align-items-center mb-4">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  style={{
                    width: "100px",
                    height: "100px",
                    marginRight: "10px",
                  }}
                />
                <div>
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">Price: ${item.price}</p>
                  <p className="card-text">Quantity: {item.quantity}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Hardcoded cart elements
const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

export default function App() {
  return (
    <div className="container">
      <Cart cartElements={cartElements} />
    </div>
  );
}
