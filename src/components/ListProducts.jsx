import { Product } from "./Product";

export const ListProducts = ({data, isLoading}) => {

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
