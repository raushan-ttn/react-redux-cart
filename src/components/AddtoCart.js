import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCart } from '../store/cartSlice';
const AddtoCart = ({ data }) => {
  const [product, setProduct] = useState(data);
  const cartItem = useSelector((state) => state.cartItem);
  const dispatch = useDispatch();

  useEffect(() => {
    setProduct(data);
  }, [data]);

  const HandleCart = () => {
    let pData = {
      id: product.id,
      count: 1,
      data: {
        title: product.title,
        price: product.price,
        img: product.thumbnail,
      },
    };
    dispatch(addCart(pData));
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
