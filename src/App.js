import "./App.css";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import Products from "./pages/Products";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import CategoryManagement from "./pages/CategoryManagement";
import ProductManagement from "./pages/ProductManagement";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/categoryManagement" element={<CategoryManagement />} />
        <Route path="/productManagement" element={<ProductManagement />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
      </Routes>
    </div>
  );
}

export default App;
