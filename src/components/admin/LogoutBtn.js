import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';
import { useNavigate, Link } from 'react-router-dom';
import { tokenService } from '../../services';
import { useSelector } from 'react-redux';

const LogoutBtn = () => {
  const authToken = tokenService.getLocalAccessToken();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const userData = useSelector(state => state.auth.userData);
  return (
    <>
      {authToken ? (
        <li className="nav-item null">
          <button
            className="nav-link click-scroll button_a null"
            style={{ color: 'red' }}
          >
            Welcome {userData.username.toUpperCase()}
          </button>
          <button
            className="nav-link click-scroll button_a null"
            onClick={handleLogout}
          >
            Logout
          </button>
        </li>
      ) : (
        <Link className="nav-link button_a" to="/login">
          Login
        </Link>
      )}
    </>
  );
};

export default LogoutBtn;
