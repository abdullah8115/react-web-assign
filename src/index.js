import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/home";
import Form1 from "./components/Forms/form1";
import Form2 from "./components/Forms/form2";
import NotFound from "./components/notFound/NotFound";
import Memo from "./components/Memo/memo"
import ProductPage from "./components/Products/products";
import ProductDetailPage from "./components/Products/Product Detail/ProductDetailPage"; // Import the ProductDetailPage component

let router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/form1",
    element: <Form1 />,
  },
  {
    path: "/form2",
    element: <Form2 />,
  },
  {
    path: "/memo",
    element: <Memo />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
  {
    path: "/products/:productId",
    element: <ProductDetailPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);
