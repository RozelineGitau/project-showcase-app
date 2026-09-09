import { Link } from "react-router-dom";
import useProducts from "./useProducts";

function Products() {
  const { products, loading } = useProducts();

  if (loading) {
    return (
      <div className="page">
        <p>Loading products...</p>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>Products</h1>

      <div className="products">
        {products.map((product) => (
          <div
            className="product-card"
            key={product.id}
          >
            <h2>{product.name}</h2>

            <p>
              {product.description}
            </p>

            <p>
              Category: {product.category}
            </p>

            <h3>
              KSh {product.price}
            </h3>

            <Link
              className="button"
              to={`/products/${product.id}`}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;