import "../styles/cart.css";
import { useOutletContext } from "react-router-dom";

export default function ProductDetails() {
  // eslint-disable-next-line no-unused-vars
  const [purchased, setPurchased] = useOutletContext();

  return (
    <>
      {purchased.length === 0 ? (
        <div className="state">Your Cart is Empty</div>
      ) : (
        <div>
          <div className="state">Your Cart Has Something</div>
          {purchased.map((product) => (
            <div className="purchasedItem" key={product.id}>
              <img src={product.image} />
              <div className="amount">{product.number}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
