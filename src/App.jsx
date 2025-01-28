import './App.css'
import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Details from './pages/Details/Details'
import Cart from './pages/Cart/Cart'
import AddProduct from './pages/AddProduct/AddProduct'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { path: "", element: <Home /> },
        { path: "details", element: <Details /> },
        { path: "cart", element: <Cart /> },
        { path: "addProduct", element: <AddProduct /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
