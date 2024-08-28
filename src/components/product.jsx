import { useState, useEffect } from "react";

export default function Product() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSplash() {
      const url = "https://fakestoreapi.com/products";
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);

      setLoading(false);
    }

    // Call the function
    fetchSplash();
  }, []);

  return <>{loading ? <div>Loading...</div> : <div>Done</div>}</>;
}
