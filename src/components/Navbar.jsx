import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>SokoHub Kenya</h2>

      <div>
        <Link to="/">
          Home
        </Link>

        <Link to="/products">
          Products
        </Link>

        <Link to="/add">
          Add Product
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;