import React from 'react'
import './navbar.css'
import { Outlet, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink to='/'>
          <h2>QuickCart</h2>
        </NavLink>
        
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