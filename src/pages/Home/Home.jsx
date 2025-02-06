import "./home.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getData, sortProducts, removeFilter } from "../../redux/cartReducer";

const Home = () => {
  const { productList, isSorted, cart } = useSelector(
    (state) => state.cartReducer
  );
  const dispatch = useDispatch();

  const isProductInCart = (id) => {
    return cart.find((prdt) => prdt.id === id);
  };

  return (
    <div className="home-container">
      {/* conditionally rendering add/remove filter button */}
      {isSorted ? (
        <button
          className="sort-btn"
          onClick={() => {
            dispatch(removeFilter());
            dispatch(getData());
          }}
        >
          Remove filter
        </button>
      ) : (
        <button className="sort-btn" onClick={() => dispatch(sortProducts())}>
          Sort Products
        </button>
      )}

      <div className="products-container">
        {/* Mapping through all the available products and rendering on UI */}
        {productList.map((prdt, idx) => {
          let id = prdt.id;
          let product = isProductInCart(id);

          return product ? (
            <ProductCard key={idx} prdt={product} />
          ) : (
            <ProductCard key={idx} prdt={prdt} />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
