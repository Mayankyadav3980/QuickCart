import React, { useEffect, useState } from "react";
import "./home.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/cartReducer";


const Home = () => {
  const { productList } = useSelector(state=> state.cartReducer)
  const dispatch = useDispatch();

 

  return (
    <div className="home-container">
      {productList.map((prdt, idx) => {
        return <ProductCard key={idx} prdt={prdt} />;
      })}
    </div>
  );
};

export default Home;
