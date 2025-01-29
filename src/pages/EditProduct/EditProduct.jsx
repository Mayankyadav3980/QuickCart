import './editProduct.css';
import React from 'react';
import { useParams } from 'react-router-dom';


const EditProduct = () => {
    const pa = useParams();
    console.log(pa);
    
  return (
    <div>EditProduct</div>
  )
}

export default EditProduct