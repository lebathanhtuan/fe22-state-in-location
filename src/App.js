import { Routes, Route } from "react-router-dom";

import "./App.css";
import "antd/dist/antd.css";

import AdminLayout from "./layouts/AdminLayout";
import LoginLayout from "./layouts/LoginLayout";

import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/products"
          element={<ProductListPage />}
        />
        <Route
          path="/product/:id"
          element={<ProductDetailPage />}
        />
      </Route>
      <Route element={<LoginLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
