import "./navbar.css";
import React, { useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { getData } from "../../redux/cartReducer";
import { useDispatch, useSelector } from "react-redux";
import { FaHome, FaPlus, FaUser, FaShoppingCart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { ToastContainer } from "react-toastify";

const Navbar = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((s) => s.cartReducer);
  const len = cart.length;

  // fetches the products data on component mount phase
  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <>
      {/* ToastContainer component to display alerts on various user actions */}
      <ToastContainer />
      <nav>
        <NavLink to="/" className="nav-brand">
          <h2>
            QuickCart
            <FaShoppingCart />
          </h2>
        </NavLink>

        <div id="nav-elements">
          <NavLink to="/" className="nav-link">
            <FaHome /> Home
          </NavLink>
          <NavLink to="/cart" className="nav-link">
            <span>
              <FaCartShopping />
              {len > 0 && len} Cart
            </span>
          </NavLink>
          <NavLink to="/add-product" className="nav-link">
            <span>
              <FaPlus /> Add Product
            </span>
          </NavLink>
          <span>
            <FaUser /> Mayank
          </span>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
