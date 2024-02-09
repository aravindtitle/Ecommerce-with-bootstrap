import React from "react";
import ProductList from "./ProductList";

const ProductsScreen = () => {
  return (
    <div>
      <h1 className="text-center">Products</h1>
      <div className="row">
        <div className="col-md-8">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default ProductsScreen;
