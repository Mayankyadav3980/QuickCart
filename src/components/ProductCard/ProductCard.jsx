import "./productCard.css";
import { MdEdit, MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import {
  deleteProduct,
  addProductToCart,
  removeProductFromCart,
} from "../../redux/cartReducer";
import Rating from "../Rating";

const ProductCard = ({ prdt }) => {
  const { id, imageUrl, title, price, rating, inCart } = prdt;
  const dispatch = useDispatch();

  return (
    <div className="card-container">
      <img src={imageUrl} alt="" />

      <div className="desc">
        <h3 className="title">
          {title.length > 20 ? title.substring(0, 20) + "..." : title}
        </h3>
        <div>
          <p className="price">&#8377;{price}</p>
          <Rating rating={rating} />
        </div>
      </div>

      <div className="options">
        <div>
          {inCart ? (
            <button
              className="cart-btn"
              onClick={() => dispatch(removeProductFromCart(id))}
            >
              Remove from Cart
            </button>
          ) : (
            <button
              className="cart-btn"
              onClick={() => dispatch(addProductToCart(prdt))}
            >
              Add Product to Cart
            </button>
          )}
        </div>

        <div className="icn">
          <NavLink to={`/details/${id}`}>
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
