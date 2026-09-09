import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import Product from "./components/Product";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/add"
          element={<AddProduct />}
        />

        <Route
          path="/products/:id"
          element={<Product />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;