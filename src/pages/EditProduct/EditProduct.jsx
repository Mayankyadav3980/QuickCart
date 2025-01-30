import "./editProduct.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct, getData } from "../../redux/cartReducer";

const EditProduct = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  // useEffect(()=>{dispatch(getData())},[])
  const {productList} = useSelector(state => state.cartReducer);

  
  // console.log(id);
  // console.log(productList);
  
  let prdtToUpdate = productList.find(prdt => prdt.id === Number(id))
  // console.log(prdtToUpdate);
  const [updatedProduct, setUpdatedProduct] = useState(prdtToUpdate);

  const handleChange = (e) => {
    setUpdatedProduct(pv=>{
      return {...pv, [e.target.name]:Number(e.target.value)}
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(updatedProduct));    
  };

  return (
    <div className="form-container">
      <h2>Update details form</h2>
      <form action="" onSubmit={handleSubmit}>
        {/* <div className="input-box">
          <label htmlFor="">Image Url</label>
          <input type="url" />
        </div>
        <div className="input-box">
          <label htmlFor="">Title</label>
          <input type="text" />
        </div> */}
        <input
          type="url"
          placeholder="ImageUrl"
          name="imageUrl"
          onChange={handleChange}
          value={updatedProduct.imageUrl}
        />
        <input
          type="text"
          placeholder="title"
          name="title"
          onChange={handleChange}
          value={updatedProduct.title}
        />
        <input
          type="number"
          placeholder="price"
          name="price"
          onChange={handleChange}
          value={updatedProduct.price}
        />
        <input
          type="number"
          placeholder="rating"
          name="rating"
          onChange={handleChange}
          value={updatedProduct.rating}
        />
        <textarea
          type="text"
          placeholder="description"
          name="description"
          onChange={handleChange}
          value={updatedProduct.description}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditProduct;
