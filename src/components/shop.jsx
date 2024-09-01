import "../styles/shop.css";
import { useState, useEffect } from "react";
import Product from "./product.jsx";
import LoadingSpinner from "./loadingspinner.jsx";
import { useNavigate } from "react-router-dom";

export default function Shop() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [chosenItems, setChosenItems] = useState(items);
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: "men's clothing", checked: false },
    { id: 2, label: "women's clothing", checked: false },
    { id: 3, label: "jewelery", checked: false },
    { id: 4, label: "electronics", checked: false },
  ]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchItems() {
      const url = "https://fakestoreapi.com/products";
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      setItems(data);
      setChosenItems(data);
      setLoading(false);
    }

    // Call the function
    fetchItems();
  }, []);

  const itemDetails = (product) => {
    navigate(`/productDetails/${product.id}`, { state: { product } });
  };

  const included = (element, array) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == element) {
        return true;
      }
    }
    return false;
  };

  const handleCheckboxChange = (id) => {
    const updatedCheck = checkboxes.map((checkbox) =>
      checkbox.id === id
        ? { ...checkbox, checked: !checkbox.checked }
        : checkbox
    );
    const categories = [];
    let filteredItems = JSON.parse(JSON.stringify(items));

    updatedCheck.map((checkbox) =>
      checkbox.checked === true ? categories.push(checkbox.label) : null
    );

    if (categories.length != 0) {
      filteredItems = items.filter((item) =>
        included(item.category, categories)
      );
    }

    setCheckboxes(updatedCheck);
    setChosenItems(filteredItems);
  };

  const clearFilters = () => {
    setChosenItems(items);
    setCheckboxes([
      { id: 1, label: "men's clothing", checked: false },
      { id: 2, label: "women's clothing", checked: false },
      { id: 3, label: "jewelery", checked: false },
      { id: 4, label: "electronics", checked: false },
    ]);
  };

  return (
    <>
      {loading ? (
        <div className="loading" data-testid="loading-spinner">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="allshop">
          <div className="sidebar">
            <div className="ctitle">Categories</div>
            <div className="categories">
              {checkboxes.map((checkbox) => (
                <div key={checkbox.id} className="category">
                  <input
                    type="checkbox"
                    id={`checkbox-${checkbox.id}`}
                    checked={checkbox.checked}
                    onChange={() => handleCheckboxChange(checkbox.id)}
                    className="box"
                  />
                  <label htmlFor={`checkbox-${checkbox.id}`}>
                    {checkbox.label}
                  </label>
                </div>
              ))}
            </div>
            <button onClick={clearFilters} className="clear">
              Clear Filters
            </button>
          </div>
          <div className="store">
            {chosenItems.map((item) => (
              <Product item={item} toDetails={itemDetails} key={item.id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
