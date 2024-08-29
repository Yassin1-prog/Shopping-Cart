import "./App.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faPhone,
  faEnvelope,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [purchased, setPurchased] = useState([]);
  const navigate = useNavigate();

  const checkCart = () => {
    navigate("/MYcart");
  };

  const remainHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="header">
        <div className="page" onClick={remainHome}>
          <h1>
            <FontAwesomeIcon icon={faStore} className="logo" />
            ShopNook
          </h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="shop">Products</Link>
            </li>
            <li>
              <div className="fakecarting" onClick={checkCart}>
                <FontAwesomeIcon icon={faCartShopping} className="carting" />
              </div>
            </li>
          </ul>
        </nav>
      </div>

      <Outlet context={[purchased, setPurchased]} />

      <div className="footer">
        <div className="about">
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            quisquam molestiae? Dignissimos, excepturi ipsum ipsam architecto
            alias vero voluptatem asperiores necessitatibus autem at voluptates
            veniam facilis obcaecati libero nobis eum. Eum, nesciunt nam fugit
            odio veritatis qui natus illum? Labore quisquam nobis eius quibusdam
            cupiditate sequi cumque veniam, recusandae, laudantium, tenetur ut
            magnam excepturi. Sequi vel repellat pariatur dolores atque.
          </p>
        </div>
        <div className="info">
          <h2>Contact Us</h2>
          <div>
            <FontAwesomeIcon icon={faPhone} />
            5113-769-832
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} />
            shopnooksupp882@gmail.com
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
