import React, { useState, useEffect } from 'react';
import { productService } from '../services';
import ProductCard from './ProductCard';
const ProductsList = () => {
  const [offset, setOffset] = useState(1);
  const [products, setProducts] = useState([]);
  let limit = 12;

  // Function to fetch data from API
  const fetchData = ({ offset, limit }) => {
    productService
      .getProduct({ offset, limit })
      .then((response) => {
        console.log(response.data.data.products);
        setProducts(response.data.data.products);
      })
      .catch((error) => {
        console.log(`Product Fetch Error: ${error}`);
      });
  };

  // Fetch data on initial render
  useEffect(() => {
    fetchData({ offset, limit });
  }, [offset, limit]);

  return (
    <>
      <section style={{ 'background-color': '#eee' }}>
        <div className="container py-5">
        <h2> Our products</h2>
          <div className="row">
            {products.map((product, index) => (
              <ProductCard key={index} data={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsList;
