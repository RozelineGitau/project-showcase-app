import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page home">
      <h1>Welcome to SokoHub Kenya</h1>

      <p>
        A simple administrator portal for
        managing Kenyan products.
      </p>

      <Link
        className="button"
        to="/products"
      >
        View Products
      </Link>
    </div>
  );
}

export default Home;