import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';
import { useNavigate } from 'react-router-dom';

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };
  return (
    <>
      <button className='nav-link click-scroll button_a null' onClick={handleLogout}>Logout</button>
    </>
  );
};

export default LogoutBtn;
