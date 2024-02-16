import React, { useState, useEffect } from 'react';
import { productService } from '../services';
import ProductCard from './ProductCard';
import Pagination from './Pagination';

const ProductsList = () => {
  const [pageNum, setPageNum] = useState(1);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [prevPage, setPrevPage] = useState(0);
  const [nextPage, setNextPage] = useState(0);

  // Function to fetch data from API
  const fetchData = ({ pageNum, limit = 9 }) => {
    productService
      .getProduct({ pageNum, limit })
      .then((response) => {
        setProducts(response.data.data.products);
        setTotalPages(response.data.data.totalPages);
        setPrevPage(response.data.data.prevPage);
        setNextPage(response.data.data.nextPage);
      })
      .catch((error) => {
        console.log(`Product Fetch Error: ${error}`);
      });
  };

  // Fetch data on initial render
  useEffect(() => {
    fetchData({ pageNum });
  }, [pageNum]);

  // Function to handle page changes
  const handlePageChange = (pageNum) => {
    setPageNum(pageNum);
  };
  return (
    <>
      <section style={{ backgroundColor: '#eee' }}>
        <div className="container py-5">
          <h2> Our products</h2>
          <div className="row">
            {products.map((product, index) => (
              <ProductCard key={index} data={product} />
            ))}
          </div>

          <Pagination
            dataHandlePageChange={handlePageChange}
            dataPageNum={pageNum}
            dataPrev={prevPage}
            dataNext={nextPage}
            dataTotalPage={totalPages}
          />
        </div>
      </section>
    </>
  );
};

export default ProductsList;
