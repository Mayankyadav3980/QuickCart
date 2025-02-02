import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/cartReducer";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

const AddProduct = () => {
  const { productList } = useSelector(s=>s.cartReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newProduct, setNewProduct] = useState({
    id: productList.length+1,
    imageUrl: "",
    title: "",
    price: 0,
    rating:0,
    description:''
  });

  const handleChange = (e) => {
    setNewProduct(pv=> {
      return {...pv, [e.target.name]:e.target.value};
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(newProduct));
    navigate('/')
    // console.log(newProduct);

  };
  return (
    <div className="form-container">
      <h2>New Product details form</h2>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="ImageUrl"
          name="imageUrl"
          onChange={handleChange}
          value={newProduct.imageUrl}
          required
        />
        <input
          type="text"
          placeholder="title"
          name="title"
          onChange={handleChange}
          value={newProduct.title}
          required
        />
        <input
          type="number"
          placeholder="price"
          name="price"
          onChange={handleChange}
          value={newProduct.price}
          required
        />
        <input
          type="number"
          placeholder="rating"
          name="rating"
          onChange={handleChange}
          value={newProduct.rating}
          required
        />
        <textarea
          type="text"
          placeholder="description"
          name="description"
          onChange={handleChange}
          value={newProduct.description}
          required
        />
        <Button text='Add' />
      </form>
    </div>
  );
};

export default AddProduct;
