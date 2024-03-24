import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/home";
import Form1 from "./components/Forms/Login";
import Form2 from "./components/Forms/Signup";
import NotFound from "./components/notFound/NotFound";
import Memo from "./components/Memo/memo";
import ProductPage from "./components/Products/products";
import ProductDetailPage from "./components/Products/Product Detail/ProductDetailPage";
import Profile from "./User Data/UserInfo";
import { UserProvider } from "./User Context/UserContext";

// Define your routes
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
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.render(
  <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>,
    document.getElementById("root")
);
