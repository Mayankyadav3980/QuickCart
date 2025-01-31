import React from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((s) => s.cartReducer);

  return (
    <div className="cart-container">
      <div className="prdt-cnt">
        {cart.map((prdt, idx) => (
          <ProductCard key={idx} prdt={prdt} />
        ))}
      </div>
      <div className="sidebar">
        <div>Total: Rs___</div>
      </div>
    </div>
  );
};

export default Cart;
