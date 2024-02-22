import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCart } from '../store/cartSlice';

const ItemCounter = ({ data }) => {
  const [count, setCount] = useState(data.count);
  const dispatch = useDispatch();
  const addCounter = () => {
    setCount(count + 1);
  };
  const removeCounter = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    let obj = {
      id: data.id,
      count,
    };
    dispatch(updateCart(obj));
  }, [dispatch, count, data.id]);

  return (
    <>
      <div className="d-flex mb-4" style={{ maxWidth: '300px' }}>
        <button className="btn btn-primary px-3 me-2" onClick={removeCounter}>
          -
        </button>

        <div className="form-outline">
          <input
            min="0"
            name="quantity"
            value={count}
            type="number"
            onChange={(event) => setCount(event.target.value)}
            className="form-control"
          />
          <label className="form-label" htmlFor="form1">
            Quantity : {count}
          </label>
        </div>

        <button className="btn btn-primary px-3 ms-2" onClick={addCounter}>
          +
        </button>
      </div>
    </>
  );
};

export default ItemCounter;
