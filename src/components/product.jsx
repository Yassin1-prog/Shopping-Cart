/* eslint-disable react/prop-types */
import "../styles/product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Product({ item, toDetails }) {
  return (
    <div className="card" data-testid="card-c" onClick={() => toDetails(item)}>
      <img src={item.image} className="product" />
      <div className="itemTitle">{item.title}</div>
      <div className="rating">
        <span className="star">
          <FontAwesomeIcon icon={faStar} className="emoji" /> {item.rating.rate}
        </span>
        <span className="critics">({item.rating.count})</span>
      </div>
      <div className="price">{"$" + item.price}</div>
    </div>
  );
}
