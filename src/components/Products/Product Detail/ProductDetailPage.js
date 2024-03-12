import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetailPage.css";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${productId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleGoBack = () => {
    navigate("/products"); // Navigate back to the products page
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Product-Detail-Container">
      <div className="Product-Detail-Info">
        <h2>{product.title}</h2>
        <p>{product.body}</p>
      </div>
      <button className="Go-Back-Button" onClick={handleGoBack}>
        Go Back
      </button>
    </div>
  );
};

export default ProductDetailPage;