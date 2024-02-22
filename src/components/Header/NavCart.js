import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeCart } from '../../store/cartSlice';
import useItemCount from '../../hooks/useItemCount';
import CountItem from './CountItem';
const NavCart = () => {
  const addedItems = useSelector((state) => state.cart.cartItem);
  const addedItem = useItemCount();
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(removeCart(id));
  };
  
  return (
    <ul className="nav navbar-nav navbar-right">
      <li className="dropdown">
        <button type="button" className="btn btn-transparent cart-nav">
          <span className="bi bi-cart"></span>
        </button>
        <span className="badge badge-warning" id="lblCartCount">
          {addedItem}
        </span>
        <ul className="dropdown-menu dropdown-cart" role="menu">
          {addedItems.map((item, index) => (
            <li key={index}>
              <span className="item">
                <span className="item-left">
                  <img src={item.data.img} width="50" height="50" alt="" />
                  <span className="item-info">
                    <span>{item.data.title.substr(1, 15)}</span>
                    <span>price:${item.data.price}</span>
                    <CountItem id={item.id} />
                  </span>
                </span>
                <span className="item-right">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="btn btn-danger  fa fa-close"
                  >
                    X
                  </button>
                </span>
              </span>
            </li>
          ))}
          <li>
            <Link to={`/cart`} className="text-xs-center">
              View Cart
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default NavCart;
