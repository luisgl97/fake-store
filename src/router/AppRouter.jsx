import { Route, Routes, Navigate } from "react-router-dom";

import { ProductsPage } from "../pages/ProductsPage";
import { SearchPage } from "../pages/SearchPage";
import { NavBar } from "../ui/components/NavBar";

import { useFetch } from "../hooks/useFetch";

const url = "https://fakestoreapi.com/products";

export const AppRouter = () => {

  const { data, isLoading } = useFetch(url);
  console.log("APIIIIIIIIIIIIIII")
  return (
    <>
      <NavBar data={data} isLoading={isLoading}/>
      <div className="container">
        <Routes>
          <Route path="products" element={<ProductsPage data={data} isLoading={isLoading}/>}></Route>
          <Route path="search" element={<SearchPage data={data} isLoading={isLoading}/>}></Route>
          <Route path="product/:id"></Route>
          <Route path="/" element={<Navigate to="/products" />}></Route>
        </Routes>
      </div>
    </>
  );
};
