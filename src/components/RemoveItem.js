import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../store/cartSlice';
const RemoveItem = ({ data }) => {
  const dispatch = useDispatch();
  const removeCartItem = () => {
    dispatch(removeItem(data.id));
  };
  
  return (
    <button
      type="button"
      className="btn btn-primary btn-sm me-1 mb-2"
      data-mdb-toggle="tooltip"
      title="Remove item"
      onClick={removeCartItem}
    >
      Remove
    </button>
  );
};

export default RemoveItem;
