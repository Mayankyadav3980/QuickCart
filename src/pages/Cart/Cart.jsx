import "./cart.css";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard";
import { resetCart } from "../../redux/cartReducer";
import Button from "../../components/Button/Button";

const Cart = () => {
  const { cart } = useSelector((s) => s.cartReducer);

  //using reduce method to calculate total amount of cart items
  let totalAmount = cart.reduce((acc, prdt) => (acc += prdt.price), 0);

  return (
    <div className="cart-container">
      {cart.length > 0 ? (
        <>
          <div className="prdt-cnt">
            {cart.map((prdt, idx) => (
              <ProductCard key={idx} prdt={prdt} />
            ))}
          </div>
          <div className="sidebar">
            <h2>Total: Rs {totalAmount}</h2>
            <Button text="Checkout" handleClick={resetCart} />
          </div>
        </>
      ) : (
        <h1>Your Cart is Empty🙁!!</h1>
      )}
    </div>
  );
};

export default Cart;
