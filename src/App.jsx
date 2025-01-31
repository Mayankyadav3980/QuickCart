import "./App.css";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import Cart from "./pages/Cart/Cart";
import AddProduct from "./pages/AddProduct/AddProduct";
import EditProduct from "./pages/EditProduct/EditProduct";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { path: "", element: <Home /> },
        { path: "details/:id", element: <Details /> },
        { path: "cart", element: <Cart /> },
        { path: "add-product", element: <AddProduct /> },
        { path: "edit-product/:id", element: <EditProduct/>},
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
