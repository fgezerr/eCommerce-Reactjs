import "./App.css";
import Signin from "./pages/Auth/Signin";
import Products from "./pages/Products";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import CategoryManagement from "./pages/CategoryManagement";
import ProductManagement from "./pages/ProductManagement";
import ShoppingCart from "./pages/ShoppingCart";
import GuestGuard from "./guard/GuestGuard";
import AuthGuard from "./guard/AuthGuard";

/* 8akjTONlpeIe@ */

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <AuthGuard>
              <Dashboard />
            </AuthGuard>
          }
        />
        <Route
          path="/products"
          element={
            <AuthGuard>
              <Products />
            </AuthGuard>
          }
        />
        <Route
          path="/"
          element={
            <GuestGuard>
              <Signin />
            </GuestGuard>
          }
        />
        <Route
          path="/categoryManagement"
          element={
            <AuthGuard>
              <CategoryManagement />
            </AuthGuard>
          }
        />
        <Route
          path="/productManagement"
          element={
            <AuthGuard>
              <ProductManagement />
            </AuthGuard>
          }
        />
        <Route
          path="/shoppingcart"
          element={
            <AuthGuard>
              <ShoppingCart />
            </AuthGuard>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
