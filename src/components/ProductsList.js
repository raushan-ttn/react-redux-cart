import React, { useState, useEffect, useRef } from 'react';
import { productService } from '../services';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import { useForm } from 'react-hook-form';

const ProductsList = () => {
  const [pageNum, setPageNum] = useState(1);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [prevPage, setPrevPage] = useState(0);
  const [nextPage, setNextPage] = useState(0);
  const [searchText, setSearchText] = useState('');

  const { register, handleSubmit } = useForm();
  // Function to fetch data from API
  const fetchData = ({ pageNum, limit = 9, searchText = '' }) => {
    productService
      .getProduct({ pageNum, limit, searchText })
      .then((response) => {
        setProducts(response.data.data.data);
        setTotalPages(response.data.data.totalPages);
        setPrevPage(response.data.data.previousPage);
        setNextPage(response.data.data.nextPage);
      })
      .catch((error) => {
        console.log(`Product Fetch Error: ${error}`);
      });
  };

  // Fetch data on initial render
  useEffect(() => {
    fetchData({ pageNum, searchText });
  }, [pageNum, searchText]);

  // Function to handle page changes
  const handlePageChange = (pageNum) => {
    setPageNum(pageNum);
  };

  const onSearching = (data) => {
    setSearchText(data.keyword);
  };

  return (
    <>
      <section style={{ backgroundColor: '#eee' }}>
        <div className="container py-5">
          <h2> Our products</h2>
          <div className="row">
            <form className="mb-lg-3" onSubmit={handleSubmit(onSearching)}>
              <div className="input-group">
                <input
                  id="form1"
                  className="form-control rounded"
                  type="search"
                  {...register('keyword')}
                  placeholder="Enter keyword"
                />
                <button
                  type="submit"
                  className="btn btn-outline-primary"
                  data-mdb-ripple-init
                >
                  search
                </button>
              </div>
            </form>

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
