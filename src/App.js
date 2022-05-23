import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import "antd/dist/antd.css";

import AdminLayout from "./layouts/AdminLayout";
import LoginLayout from "./layouts/LoginLayout";

import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import LoginPage from "./pages/LoginPage";

import { ROUTES } from "./constants/routes";

function App() {
  const [name, setName] = useState("");
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route
          path={ROUTES.ADMIN.DASHBOARD}
          element={<HomePage />}
        />
        <Route
          path={ROUTES.ADMIN.PRODUCT_LIST}
          element={
            <ProductListPage
              name={name}
              setName={setName}
            />
          }
        />
        <Route
          path={ROUTES.ADMIN.PRODUCT_DETAIL}
          element={<ProductDetailPage />}
        />
      </Route>
      <Route element={<LoginLayout />}>
        <Route
          path={ROUTES.LOGIN}
          element={<LoginPage />}
        />
      </Route>
    </Routes>
  );
}

export default App;
