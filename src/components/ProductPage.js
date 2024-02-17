import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AddtoCart from './AddtoCart';
import { productService } from '../services';

const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const [images, setImages] = useState([]);
  const params = useParams();
  const paramId = params.id;
  const [index, setIndex] = useState(0);

  const fetchProduct = (id) => {
    productService
      .getProduct({ id })
      .then((response) => {
        setProduct(response.data.data);
        setImages(response.data.data.images);
      })
      .catch((error) => {
        console.log(`Product Fetch Error: ${error}`);
      });
  };
  // Fetch data on initial render
  useEffect(() => {
    fetchProduct(paramId);
  }, [paramId]);

  return (
    <>
      <div className="container">
        <div className="card">
          <Link to="/products" className="link-primary ">
            Back to Products
          </Link>
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                  {product
                    ? images.map((img, idx) => (
                        <div
                          key={idx}
                          className={`tab-pane ${
                            idx === index ? 'active' : ''
                          }`}
                        >
                          <img width="588" height="392" alt={idx} src={img} />
                        </div>
                      ))
                    : null}
                </div>
                <ul className="preview-thumbnail nav nav-tabs">
                  {product
                    ? images.map((img, idx) => (
                        <li
                          key={idx}
                          className={`${idx === index ? 'active' : ''}`}
                        >
                          <span
                            onClick={() => {
                              setIndex(idx);
                            }}
                          >
                            <img width="114" height="64" alt={idx} src={img} />
                          </span>
                        </li>
                      ))
                    : null}
                </ul>
              </div>
              <div className="details col-md-6">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <h4 className="price">
                  current price: <span>${product.price}</span>
                </h4>
                <p className="vote">
                  <strong>91%</strong> of buyers enjoyed this product!{' '}
                  <strong>(87 votes)</strong>
                </p>

                <div className="action">
                  <AddtoCart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
