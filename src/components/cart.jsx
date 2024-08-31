import "../styles/cart.css";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
  const [purchased, setPurchased] = useOutletContext();
  const [basket, setBasket] = useState(purchased);

  const total = basket.reduce(
    (acc, product) => acc + product.number * product.price,
    0
  );

  const add = (product) => {
    const updatedData = basket.map((item) =>
      item.id === product.id ? { ...item, ["number"]: item.number + 1 } : item
    );
    setBasket(updatedData);
    setPurchased(updatedData);
  };

  const minus = (product) => {
    if (product.number == 1) {
      return;
    }
    const updatedData = basket.map((item) =>
      item.id === product.id ? { ...item, ["number"]: item.number - 1 } : item
    );
    setBasket(updatedData);
    setPurchased(updatedData);
  };

  const remove = (product) => {
    const updatedData = basket.filter((item) => item.id != product.id);
    setBasket(updatedData);
    setPurchased(updatedData);
  };

  const checkout = () => {
    setBasket([]);
    setPurchased([]);
  };

  return (
    <>
      {purchased.length === 0 ? (
        <div className="state">Your Cart is Empty</div>
      ) : (
        <div className="allcart">
          <div className="shoppingCart">
            <h1 className="head">Your Shopping Cart</h1>
            {purchased.map((product) => (
              <div className="purchasedItem" key={product.id}>
                <img className="chosenImage" src={product.image} />
                <div className="ititle">{product.title}</div>
                <div className="iprice">
                  {"$" + Math.round(product.price * product.number * 100) / 100}
                </div>
                <div className="remove" onClick={() => remove(product)}>
                  <FontAwesomeIcon icon={faTrash} />
                </div>
                <div className="put">
                  <button className="change" onClick={() => minus(product)}>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <div className="amount">{product.number}</div>
                  <button className="change" onClick={() => add(product)}>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="order">
            <div className="otitle">Order Summary</div>
            <div className="osub">Subtotal</div>
            <div className="total1">{"$" + Math.round(total * 100) / 100}</div>
            <div className="odel">Delivery Fee</div>
            <div className="ozero">$0</div>
            <hr />
            <div className="total2">Total</div>
            <div className="total3">{"$" + Math.round(total * 100) / 100}</div>
            <button className="checkout" onClick={checkout}>
              Buy
            </button>
          </div>
        </div>
      )}
    </>
  );
}
