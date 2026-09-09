import {
  useEffect,
  useState
} from "react";

import {
  useNavigate,
  useParams
} from "react-router-dom";

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] =
    useState(null);

  const [price, setPrice] =
    useState("");

  useEffect(() => {
    fetch(
      `http://localhost:3000/products/${id}`
    )
      .then((response) =>
        response.json()
      )
      .then((data) => {
        setProduct(data);
        setPrice(data.price);
      });
  }, [id]);

  function updatePrice() {
    fetch(
      `http://localhost:3001/products/${id}`,
      {
        method: "PATCH",

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({
          price: Number(price)
        })
      }
    )
      .then((response) =>
        response.json()
      )
      .then((updatedProduct) => {
        setProduct(updatedProduct);

        alert(
          "Price updated successfully"
        );
      });
  }

  function deleteProduct() {
    const confirmed =
      window.confirm(
        "Delete this product?"
      );

    if (!confirmed) {
      return;
    }

    fetch(
      `http://localhost:3001/products/${id}`,
      {
        method: "DELETE"
      }
    ).then(() => {
      navigate("/products");
    });
  }

  if (!product) {
    return (
      <div className="page">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="product-detail">
        <h1>{product.name}</h1>

        <p>
          {product.description}
        </p>

        <p>
          Category: {product.category}
        </p>

        <h2>
          KSh {product.price}
        </h2>

        <hr />

        <h3>Change Price</h3>

        <input
          type="number"
          value={price}
          onChange={(event) =>
            setPrice(event.target.value)
          }
        />

        <button
          className="button"
          onClick={updatePrice}
        >
          Update Price
        </button>

        <button
          className="delete"
          onClick={deleteProduct}
        >
          Delete Product
        </button>
      </div>
    </div>
  );
}

export default Product;