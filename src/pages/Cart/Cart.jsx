import React from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard";
import { resetCart } from '../../redux/cartReducer'
import Button from "../../components/Button/Button";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((s) => s.cartReducer);

  let totalAmount = cart.reduce((acc, prdt)=>acc+=prdt.price, 0);

  const handleCheckout = () => {
    dispatch(resetCart());
    alert('purchase successfull')
  }

  return (
    <div className="cart-container">
      {cart.length > 0 ? (
        <>
          <div className="prdt-cnt">
            {cart.map((prdt, idx) => (
              <ProductCard key={idx} prdt={prdt} />
            ))}
          </div>
          <div className="sidebar">
            <h2>Total: Rs {totalAmount}</h2>
            {/* <button onClick={handleCheckout}>Checkout</button> */}
            <Button text="Checkout" handleClick={handleCheckout} />
          </div>
        </>
      ) : (
        <h1>Your Cart is Empty!!</h1>
      )}
    </div>
  );
};

export default Cart;
