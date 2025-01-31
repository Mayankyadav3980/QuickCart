import React, { useEffect, useState } from "react";
import "./home.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getData, sortProducts, removeFilter } from "../../redux/cartReducer";

const Home = () => {
  const { productList, isSorted } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  return (
    <div className="home-container">
      {isSorted ? (
        <button onClick={() => {dispatch(removeFilter()); dispatch(getData())}}>Remove filter</button>
      ) : (
        <button onClick={() => dispatch(sortProducts())}>Sort Products</button>
      )}

      <div className="products-container">
        {productList.map((prdt, idx) => {
          return <ProductCard key={idx} prdt={prdt} />;
        })}
      </div>
    </div>
  );
};

export default Home;
