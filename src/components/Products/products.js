// import React, { useState, useEffect } from "react";
// import "../Products/products.css";
// import Navbar from "../navbar/navbar";

// const ProductPage = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts"
//       );
//       if (!response.ok) {
//         throw new Error("Failed to fetch products");
//       }
//       const data = await response.json();
//       setProducts(data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <h1>Products</h1>
//       <div className="product-container">
//         {products.map((product) => (
//           <div key={product.id} className="product-box">
//             <h2>{product.title}</h2>
//             <p>{product.body}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../Products/products.css";
import Navbar from "../navbar/navbar";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
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
      <Navbar />
      <h1>Products</h1>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-box">
            <h2>{product.title}</h2>
            <p>{product.body}</p>
            <Link to={`/products/${products.id}`}>More Info</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;