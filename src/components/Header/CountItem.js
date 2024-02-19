import React from 'react';
import useItemCount from '../../hooks/useItemCount';

const CountItem = ({ id }) => {
  const count = useItemCount(id);
  return <span>count:{count}</span>;
};

export default CountItem;
