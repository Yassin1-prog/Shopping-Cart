/* eslint-disable react/prop-types */
import "../styles/card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
/*
const item = {
  category: "men's clothing",
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  id: 1,
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  price: 109.95,
  rating: { rate: 3.9, count: 120 },
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
};
*/
export default function Product({ item }) {
  return (
    <div className="card">
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
