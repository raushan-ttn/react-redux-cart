import { useSelector } from 'react-redux';

const useItemCount = (id = null) => {
  const cartItem = useSelector((state) => state.cart.cartItem);
  let totalItems = 0;

  if (id) {
    cartItem.forEach((item) => {
      if (item.id === id) {
        totalItems = item.count;
      }
    });
  } else {
    cartItem.forEach((item) => {
      totalItems = totalItems + item.count;
    });
  }
  return totalItems;
};

export default useItemCount;
