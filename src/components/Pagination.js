import React from 'react';

const Pagination = ({
  dataHandlePageChange,
  dataPageNum,
  dataPrev,
  dataNext,
  dataTotalPage,
}) => {
  const setHandlePageChange = (pageNum) => {
    dataHandlePageChange(pageNum);
  };
  return (
    <>
      {/* Render pagination controls */}
      <nav aria-label="...">
        <ul className="pagination justify-content-center">
          {/* Previous page button */}
          {dataPrev ? (
            <li
              className={`page-item`}
              onClick={() => setHandlePageChange(dataPrev)}
            >
              {' '}
              <span className="page-link">Prev</span>
            </li>
          ) : null}
          {/* Page numbers */}
          {Array.from({ length: dataTotalPage }, (_, index) => (
            <li
              className={
                dataPageNum === index + 1 ? 'page-item active' : 'page-item'
              }
              aria-current="page"
              key={index + 1}
              onClick={() => setHandlePageChange(index + 1)}
              style={{
                fontWeight: dataPageNum === index + 1 ? 'bold' : '',
              }}
            >
              <span className="page-link">{index + 1}</span>
            </li>
          ))}
          {/* Next page button */}
          {dataNext ? (
            <li
              className={`page-item`}
              onClick={() => setHandlePageChange(dataNext)}
            >
              <span className="page-link">Next</span>
            </li>
          ) : null}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
