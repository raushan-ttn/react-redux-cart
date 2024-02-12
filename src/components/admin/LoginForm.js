import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import authUserService from '../../AuthService/UserAuth';
import { useDispatch } from 'react-redux';
import { login } from '../../store/authSlice';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const loginUser = async (data) => {
    try {
      const user = await authUserService.login(data);
      if (user.success) {
        dispatch(login(user));
        navigate('/about');
      }
    } catch (error) {
      console.log(error, 'login-form');
    }
  };

  return (
    <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner">
          <div className="card">
            <div className="card-body">
              <div className="app-brand justify-content-center">
                <a href="/" className="app-brand-link gap-2">
                  <span className="app-brand-text demo text-body fw-bolder">
                    Topics
                  </span>
                </a>
              </div>
              <h4 className="mb-2">Welcome to Topics! 👋</h4>
              <p className="mb-4">
                Please sign-in to your account and start the adventure
              </p>

              <form
                id="formAuthentication"
                className="mb-3"
                method="POST"
                onSubmit={handleSubmit(loginUser)}
              >
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email or Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    {...register('username', { required: true })}
                    placeholder="Enter your email or username"
                    autoFocus
                  />
                  {errors.username?.type === 'required' && (
                    <p className="form-error" role="alert">
                      Username is required.
                    </p>
                  )}
                </div>
                <div className="mb-3 form-password-toggle">
                  <div className="d-flex justify-content-between">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    <a href="auth-forgot-password-basic.html">
                      <small>Forgot Password?</small>
                    </a>
                  </div>
                  <div className="input-group input-group-merge">
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      {...register('password', { required: true })}
                      placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                      aria-describedby="password"
                    />
                    {errors.password?.type === 'required' && (
                      <p className="form-error" role="alert">
                        Password is required.
                      </p>
                    )}
                    <span className="input-group-text cursor-pointer">
                      <i className="bx bx-hide"></i>
                    </span>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="remember-me"
                    />
                    <label className="form-check-label" htmlFor="remember-me">
                      {' '}
                      Remember Me{' '}
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <button
                    className="btn btn-primary d-grid w-100"
                    type="submit"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <p className="text-center">
                <span>New on our platform?</span>
                <a href="/register">
                  <span>Create an account</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
