import React from "react";
import "./productCard.css";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import {
  deleteProduct,
  addProductToCart,
  removeProductFromCart,
} from "../../redux/cartReducer";

const ProductCard = ({ prdt }) => {
  const { id, imageUrl, title, price, rating, description , inCart} = prdt;
  const dispatch = useDispatch();

  return (
    <div className="card-container">
      <img src={imageUrl} alt="" />

      <div className="desc">
        <h3 className="title">
          {title.length > 17 ? title.substring(0, 17) + "..." : title}
        </h3>
        <div>
          <p className="price">Rs. {price}</p>
          <p>⭐️⭐️⭐️⭐️ {rating}</p>
        </div>
      </div>

      <div className="options">
        <div>
          {inCart ? (
            <button
              className="cart-btn"
              onClick={() => dispatch(removeProductFromCart(id))}
            >
              {" "}
              Remove from Cart{" "}
            </button>
          ) : (
            // <Button
            //   text={"Remove from Cart"}
            //   payload={id}
            //   handleClick={removeProductFromCart}
            // />
            <button
              className="cart-btn"
              onClick={() => dispatch(addProductToCart(prdt))}
            >
              Add Product to Cart
            </button>
            // <Button
            //   text={"add Product to cart"}
            //   payload={prdt}
            //   handleClick={addProductToCart}
            // />
          )}
        </div>
        
          <div className="icn">
            <NavLink to={`/details/${id}`}>
              {/* <button>View Details</button> */}
              <Button text={"View Details"} />
            </NavLink>
            {!inCart && (
            <div>
              <NavLink to={`/edit-product/${id}`}>
                <MdEdit className="icon" />
              </NavLink>
              <MdDelete
                className="icon"
                onClick={() => dispatch(deleteProduct(id))}
              />
            </div>)}
          </div>
        
      </div>
    </div>
  );
};

export default ProductCard;
