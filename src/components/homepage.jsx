import "../styles/homepage.css";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  const startShopping = () => {
    navigate("/shop");
  };

  return (
    <>
      <div className="main">
        <div className="motto">
          <div>Where shopping</div>{" "}
          <div>
            meets <span>JOY</span>
          </div>
          <button className="shop" onClick={startShopping}>
            SHOP NOW
          </button>
        </div>
      </div>
      <div className="overview">
        <div className="title">Find Everything You Need</div>
        <div className="content">
          <div>
            <h2>Clothes</h2>
            <img
              className="imgg"
              src="https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
          <div>
            <h2>Accessories</h2>
            <img
              className="imgg"
              src="https://images.pexels.com/photos/354103/pexels-photo-354103.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
          <div>
            <h2>Electronics</h2>
            <img
              className="imgg"
              src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
