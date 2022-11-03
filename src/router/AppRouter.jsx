import { Route, Routes, Navigate } from "react-router-dom";

import { ProductsPage } from "../pages/ProductsPage";
import { SearchPage } from "../pages/SearchPage";
import { NavBar } from "../ui/components/NavBar";

export const AppRouter = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="products" element={<ProductsPage />}></Route>
          <Route path="search" element={<SearchPage />}></Route>
          <Route path="product/:id"></Route>
          <Route path="/" element={<Navigate to="/products" />}></Route>
        </Routes>
      </div>
    </>
  );
};
