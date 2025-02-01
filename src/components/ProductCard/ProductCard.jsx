import React from "react";
import "./productCard.css";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";
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
          {title.length > 20 ? title.substring(0, 20) + "..." : title}
        </h3>
        <div>
          <p className="price">Rs. {price}</p>
          <p>⭐️⭐️⭐️⭐️ {rating}</p>
        </div>
      </div>

      <div className="options">
        <div>
          <NavLink to={`/details/${id}`}>
            <button>View Details</button>
          </NavLink>
          {inCart ? (
            <button onClick={() => dispatch(removeProductFromCart(id))}>
              Remove from Cart
            </button>
          ) : (
            <button onClick={() => dispatch(addProductToCart(prdt))}>
              add Product to cart
            </button>
          )}
        </div>
        {!inCart && (
          <div>
            <NavLink to={`/edit-product/${id}`}>
              <MdEdit className="icon" />
            </NavLink>
            <MdDelete
              className="icon"
              onClick={() => dispatch(deleteProduct(id))}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
