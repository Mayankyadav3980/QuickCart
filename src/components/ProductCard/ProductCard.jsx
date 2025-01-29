import React from "react";
import "./productCard.css";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";

const ProductCard = ({ prdt }) => {
  const { id, imageUrl, title, price, rating, description } = prdt;
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
        <button>View Details</button>
        <div>
          <NavLink to={`/edit-product/${id}`}>
            <MdEdit className="icon" />
          </NavLink>
          <MdDelete className="icon" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
