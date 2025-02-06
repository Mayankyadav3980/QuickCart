import "./editProduct.css";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../redux/cartReducer";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

const EditProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { productList } = useSelector((state) => state.cartReducer);

  //getting the product based on id from url params
  let prdtToUpdate = productList.find((prdt) => prdt.id === Number(id));

  const [updatedProduct, setUpdatedProduct] = useState(prdtToUpdate);

  const handleChange = (e) => {
    setUpdatedProduct((pv) => {
      return { ...pv, [e.target.name]: e.target.value };
    });
  };

  //dispatches updateProduct action on form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(updatedProduct));
    nav("/");
  };

  return (
    <div className="form-container">
      <h2>Update Details </h2>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="ImageUrl"
          name="imageUrl"
          onChange={handleChange}
          value={updatedProduct.imageUrl}
          required
        />
        <input
          type="text"
          placeholder="title"
          name="title"
          onChange={handleChange}
          value={updatedProduct.title}
          required
        />
        <input
          type="number"
          placeholder="price"
          name="price"
          onChange={handleChange}
          value={updatedProduct.price}
          required
        />
        <input
          type="number"
          placeholder="rating"
          name="rating"
          onChange={handleChange}
          value={updatedProduct.rating}
          required
        />
        <textarea
          type="text"
          placeholder="description"
          name="description"
          onChange={handleChange}
          value={updatedProduct.description}
          required
        />
        <Button text={"Update"} />
      </form>
    </div>
  );
};

export default EditProduct;
