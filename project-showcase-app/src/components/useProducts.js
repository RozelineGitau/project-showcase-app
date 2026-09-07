import {
  useEffect,
  useState
} from "react";

function useProducts() {
  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((response) =>
        response.json()
      )
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return {
    products,
    loading
  };
}

export default useProducts;