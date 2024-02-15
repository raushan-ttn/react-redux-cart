import React from 'react';

const ProductCard = ({ data }) => {
  let amount = data.price % data.discountPercentage;
  let totalAmount = amount + data.price;
  return (
    <div className="col-md-12 col-lg-4 mb-4 mb-lg-3">
      <div className="card">
        <div className="d-flex justify-content-between p-3">
          <p className="lead mb-0">{data.brand}</p>
          <div
            className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
            style={{ width: '35px', height: '35px' }}
          >
            <p className="text-white mb-0 small">{data.rating}</p>
          </div>
        </div>
        <img
          src={data.thumbnail}
          className="card-img-top"
          alt="Laptop"
          width="445"
          height="297"
        />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <p className="small">
              <a href="#!" className="text-muted">
                {data.category}
              </a>
            </p>
            <p className="small text-danger">
              {}
              <s>${Math.round(totalAmount)}</s>
            </p>
          </div>

          <div className="d-flex justify-content-between mb-3">
            <h5 className="mb-0">{data.title}</h5>
            <h5 className="text-dark mb-0">${data.price}</h5>
          </div>

          <div className="d-flex justify-content-between mb-2">
            <p className="text-muted mb-0">
              Available: <span className="fw-bold">{data.stock}</span>
            </p>
            <div className="ms-auto text-warning">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
