import React, {useEffect} from 'react'
import './navbar.css'
import { Outlet, NavLink } from 'react-router-dom'
import { getData } from '../../redux/cartReducer'
import { useDispatch } from 'react-redux'

const Navbar = () => {
  const dispatch  = useDispatch();

   useEffect(() => {
     dispatch(getData());
   }, []);

  return (
    <>
      <nav>
        <NavLink to='/'>
          <h2>QuickCart</h2>
        </NavLink>
        
        <div>
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