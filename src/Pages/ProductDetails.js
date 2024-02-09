// pages/ProductDetails.js
import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  // Fetch product details based on id from API or use hardcoded data
  const product = {
    id: id,
    title: `Product ${id}`,
    price: 10 * parseInt(id),
    imageUrl: `https://via.placeholder.com/150?text=Product+${id}`,
    description: `This is the description for Product ${id}.`,
  };

  return (
    <div>
      <h2>{product.title}</h2>
      <div>
        <img src={product.imageUrl} alt={product.title} />
        <p>Description: {product.description}</p>
        <p>Price: ${product.price}</p>
        {/* Add button to add product to cart */}
      </div>
    </div>
  );
}

export default ProductDetails;
