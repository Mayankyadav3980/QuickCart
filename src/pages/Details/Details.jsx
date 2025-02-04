import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCart,
  removeProductFromCart,
} from "../../redux/cartReducer";
import "./details.css";
import Button from "../../components/Button/Button";
import Rating from "../../components/Rating";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productList, cart } = useSelector((s) => s.cartReducer);
  const prdt = productList.find((p) => p.id === Number(id));
  const isProductInCart = (id) => {
    return cart.find((prdt) => prdt.id === Number(id));
  };

  return (
    <div className="details-container">
      <div className="details">
        <div className="prdt-det">
          <img src={prdt.imageUrl} alt="" />
        </div>

        <div className="desc">
          <h3>Name: {prdt.title}</h3>
          <h4>Price: &#8377;{prdt.price}</h4>
          <Rating rating={prdt.rating} />

          <p>{prdt.description}</p>
          {!isProductInCart(id) ? (
            <Button
              text={"Add to Cart"}
              payload={prdt}
              handleClick={addProductToCart}
            />
          ) : (
            <Button
              text={"Remove from Cart"}
              payload={prdt.id}
              handleClick={removeProductFromCart}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
