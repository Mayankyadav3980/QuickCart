import React from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import  { addProductToCart } from '../../redux/cartReducer';
import './details.css'

const Details = () => {
  const {id} = useParams();
  const dispatch = useDispatch()
  const { productList} = useSelector(s=>s.cartReducer);
  const prdt = productList.find(p=>p.id===Number(id));

  return (
    <div className="details-container">
      <div className="details">
        <div className='prdt-det'>
          <img src={prdt.imageUrl} alt="" />
          <div>
            <p>Name: {prdt.title}</p>
            <p>Price: Rs.{prdt.price}</p>
            <p>Rating: {prdt.rating}</p>
          </div>
        </div>
        <div className="desc">
          <p>{prdt.description}</p>
        </div>
        <button onClick={()=>dispatch(addProductToCart(prdt))}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Details