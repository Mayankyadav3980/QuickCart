import React, {useEffect} from 'react'
import './navbar.css'
import { Outlet, NavLink } from 'react-router-dom'
import { getData } from '../../redux/cartReducer'
import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {
  const dispatch  = useDispatch();
  const {cart} =  useSelector(s=>s.cartReducer);
  const len = cart.length;
   useEffect(() => {
     dispatch(getData());
   }, []);

  return (
    <>
      <nav>
        <NavLink to='/'>
          <h2>QuickCart</h2>
        </NavLink>
        
        <div id='nav-elements'>
          <NavLink to='/'>
              <span>Home</span>
          </NavLink>
          <NavLink to='/cart'>
              <span>Cart {len>0 && len}</span>
          </NavLink>
          <NavLink to='/add-product'>
              <span>add product</span>
          </NavLink>
          <span>mayank</span>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar