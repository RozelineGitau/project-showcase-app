import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();

  const [name, setName] =
    useState("");

  const [price, setPrice] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [description, setDescription] =
    useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newProduct = {
      name,
      price: Number(price),
      category,
      description
    };

    fetch(
      "http://localhost:3001/products",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json"
        },

        body:
          JSON.stringify(newProduct)
      }
    )
      .then((response) =>
        response.json()
      )
      .then(() => {
        navigate("/products");
      });
  }

  return (
    <div className="page">
      <h1>Add Product</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Product Name
        </label>

        <input
          type="text"
          value={name}
          onChange={(event) =>
            setName(event.target.value)
          }
          required
        />

        <label>
          Price
        </label>

        <input
          type="number"
          value={price}
          onChange={(event) =>
            setPrice(event.target.value)
          }
          required
        />

        <label>
          Category
        </label>

        <input
          type="text"
          value={category}
          onChange={(event) =>
            setCategory(event.target.value)
          }
          required
        />

        <label>
          Description
        </label>

        <textarea
          value={description}
          onChange={(event) =>
            setDescription(
              event.target.value
            )
          }
        />

        <button
          className="button"
          type="submit"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;