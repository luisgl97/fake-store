import { Product } from "./Product";
import { useFetch } from "../hooks/useFetch";

const url = "https://fakestoreapi.com/products";

export const ListProducts = ({category=''}) => {
  const { data, isLoading } = useFetch(url + category);

  return (
    <>
      {isLoading && (
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      <div className="row g-4 mt-1">
        {data?.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </>
  );
};
