import React, { useState, useEffect } from "react";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div>
      <h1>Products</h1>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-box">
            <h2>{product.title}</h2>
            <p>{product.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;