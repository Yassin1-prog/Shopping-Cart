import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Shop from "./components/shop.jsx";
import Homepage from "./components/homepage.jsx";
import Item from "./components/productDetails.jsx";
import Cart from "./components/cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "shop", element: <Shop /> },
      { path: "productDetails/:id", element: <Item /> },
      { path: "MYcart", element: <Cart /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
