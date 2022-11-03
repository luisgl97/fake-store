import { memo } from "react";
import { Product } from "./Product";
import { useFetch } from '../hooks/useFetch'

const url = "https://fakestoreapi.com/products";

export const ListProducts = memo(({category=''}) => {

  const {data, isLoading} = useFetch(url+category)

  console.log(data);
  return (
    <>
      {isLoading && <h2 className="mt-1">Cargando ...</h2>}
      <div className="row g-4 mt-1">
        {data?.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </>
  );
});
