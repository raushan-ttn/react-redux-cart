import React from 'react';

const AddtoCart = ({data}) => {
  const HandleCart = () => {
    console.log(data, 'props');
  };
  return (
    <>
      <button onClick={HandleCart} className="add-to-cart btn btn-default">
        Add to Cart
      </button>
    </>
  );
};

export default AddtoCart;
