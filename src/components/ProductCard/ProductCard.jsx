import React from "react";
import "./productCard.css";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/cartReducer";

const ProductCard = ({ prdt }) => {
  const { id, imageUrl, title, price, rating, description } = prdt;
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
        <NavLink to={`/details/${id}`}>
          <button>View Details</button>
        </NavLink>
        <div>
          <NavLink to={`/edit-product/${id}`}>
            <MdEdit className="icon" />
          </NavLink>
          <MdDelete className="icon" onClick={()=>dispatch(deleteProduct(id))}/>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
