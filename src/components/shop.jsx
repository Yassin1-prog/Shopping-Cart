import "../styles/shop.css";
import { useState, useEffect } from "react";
import Product from "./product.jsx";

export default function Shop() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      const url = "https://fakestoreapi.com/products";
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      setItems(data);
      setLoading(false);
    }

    // Call the function
    fetchItems();
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="store">
          {items.map((item) => (
            <Product item={item} key={item.id} />
          ))}
        </div>
      )}
    </>
  );
}
