import info from "../styles/details.module.css";
import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faArrowLeftLong,
  faCartPlus,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

export default function ProductDetails() {
  const [amount, setAmount] = useState(0);
  const [purchased, setPurchased] = useOutletContext();

  const location = useLocation();
  const item = location.state.product;
  const navigate = useNavigate();

  const startShopping = () => {
    navigate("/shop");
  };

  const add = () => {
    let updatedData = [...purchased];
    if (
      purchased.length === 0 ||
      purchased.filter((product) => product.id === item.id).length === 0
    ) {
      let newItem = JSON.parse(JSON.stringify(item));
      newItem.number = amount + 1;
      updatedData.push(newItem);
    } else {
      updatedData = purchased.map((product) =>
        product.id === item.id
          ? { ...product, ["number"]: product.number + 1 }
          : product
      );
    }
    setPurchased(updatedData);
    setAmount(amount + 1);
  };

  const minus = () => {
    let updatedData = [...purchased];
    let temp = purchased.filter((product) => product.id == item.id);
    if (temp[0].number === 1) {
      updatedData = purchased.filter((product) => product.id != item.id);
    } else {
      updatedData = purchased.map((product) =>
        product.id === item.id
          ? { ...product, ["number"]: product.number - 1 }
          : product
      );
    }
    setPurchased(updatedData);
    setAmount(amount - 1);
  };

  return (
    <div className={info.container}>
      <div className={info.image}>
        <img src={item.image} className={info.product} />
      </div>
      <div className={info.content}>
        <div className={info.itemTitle}>{item.title}</div>
        <div className={info.rating}>
          <span className={info.star}>
            <FontAwesomeIcon icon={faStar} className={info.emoji} />{" "}
            {item.rating.rate}
          </span>
          <span className={info.critics}>({item.rating.count})</span>
        </div>
        <div className={info.price}>{"$" + item.price}</div>
        <div className={info.descr}>{item.description}</div>
        <div className={info.btns}>
          {amount > 0 ? (
            <div className={info.put}>
              <button className={info.change} onClick={minus}>
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <div>{amount}</div>
              <button className={info.change} onClick={add}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          ) : (
            <button className={info.add} onClick={add}>
              <FontAwesomeIcon icon={faCartPlus} className={info.cart} />
              Add to Cart
            </button>
          )}
          <button className={info.back} onClick={startShopping}>
            <FontAwesomeIcon icon={faArrowLeftLong} className={info.arrow} />
          </button>
        </div>
      </div>
    </div>
  );
}
