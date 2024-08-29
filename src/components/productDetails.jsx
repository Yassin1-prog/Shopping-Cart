import info from "../styles/details.module.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faArrowLeftLong,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

export default function ProductDetails() {
  const location = useLocation();
  const item = location.state.product;
  const navigate = useNavigate();

  const startShopping = () => {
    navigate("/shop");
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
          <button className={info.add}>
            <FontAwesomeIcon icon={faCartPlus} className={info.cart} />
            Add to Cart
          </button>
          <button className={info.back} onClick={startShopping}>
            <FontAwesomeIcon icon={faArrowLeftLong} className={info.arrow} />
          </button>
        </div>
      </div>
    </div>
  );
}
