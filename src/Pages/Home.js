// pages/Home.js
import React from "react";
import ProductCard from "../Components/ProductCard";

function Home() {
  // Dummy product data
  const products = [
    {
      id: 1,
      title: "Product 1",
      price: 10,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Product 2",
      price: 20,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Product 3",
      price: 30,
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div>
      <h2>Featured Products</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
