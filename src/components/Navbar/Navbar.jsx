import React from 'react'
import './navbar.css'
import { Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav>
        <h2>QuickCart</h2>
        <div>
          <span>add product</span>
          <span>mayank</span>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar