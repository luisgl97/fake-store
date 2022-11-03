import { useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import { ListProducts } from "../components/ListProducts";

export const SearchPage = ({ data }) => {
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  data = data?.filter((product) =>
    product.title.toLocaleLowerCase().includes(q)
  );

  return (
    <div>
      <h1>SearchPage</h1>
      <hr />
      {
        (q === '') ? 
        ( <h1>No se encontro el producto</h1>) : 
        ( <ListProducts data={data} />)
      }
     
    </div>
  );
};
