import React from 'react';
import useItemCount from '../../hooks/useItemCount';

const CountItem = ({ id, type = 'list' }) => {
  const count = useItemCount(id);
  if (type === 'list') {
    return <span>count:{count}</span>;
  } else {
    return (
      <h5 className="mb-0">
        Cart - {count} {count === 1 ? 'item' : 'items'}
      </h5>
    );
  }
};

export default CountItem;
