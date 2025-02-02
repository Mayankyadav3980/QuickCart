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
            <div>Total: Rs {totalAmount}</div>
            {/* <button onClick={handleCheckout}>Checkout</button> */}
            <Button text="Checkout" onClick={handleCheckout} />
          </div>
        </>
      ) : (
        <h1>Your Cart is Empty!!</h1>
      )}
    </div>
  );
};

export default Cart;
