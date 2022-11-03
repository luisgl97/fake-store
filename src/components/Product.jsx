import {memo} from "react";

export const Product = memo(({ image, title }) => {
  return (
    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="d-flex justify-content-center">
            <a href="#" className="btn btn-primary">
              Ver más
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});
