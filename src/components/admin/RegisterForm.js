import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import authUserService from '../../AuthService/UserAuth';
import parse from 'html-react-parser';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({ status: false, message: '' });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const create = async (data) => {
    try {
      const userData = await authUserService.createUser(data);
      if (userData && userData.status === 201) {
        setError({ status: true, message: userData.data.message });
        setTimeout(
          navigate('/'),
          2000
        );
      } else {
        setError({ status: false, message: userData.message });
      }
    } catch (error) {
      console.log(error, 'error');
    }
  };
  return (
    <div className="container-xxl">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner">
          <div className="card">
            <div className="card-body">
              <div className="app-brand justify-content-center">
                <a href="index.html" className="app-brand-link gap-2">
                  <span className="app-brand-logo demo"></span>
                  <span className="app-brand-text demo text-body fw-bolder">
                    Topics
                  </span>
                </a>
              </div>
              <h4 className="mb-2">Adventure starts here 🚀</h4>
              <p className="mb-4">Make your app management easy and fun!</p>
              {error.status
                ? parse(
                    `<p className="mb-4" style="color:green">${error.message}</p>`
                  )
                : parse(
                    `<p className="mb-4" style="color:red">${error.message}</p>`
                  )}
              <form
                id="formAuthentication"
                className="mb-3"
                onSubmit={handleSubmit(create)}
              >
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    {...register('username', { required: true, maxLength: 20 })}
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter your username"
                    autoFocus
                  />
                  {errors.username?.type === 'required' && (
                    <p className="form-error" role="alert">
                      Username is required.
                    </p>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    {...register('email', {
                      required: 'Email address is required.',
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'Entered value does not match email format',
                      },
                    })}
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    aria-invalid={errors.email ? 'true' : 'false'}
                  />
                  {errors.email && (
                    <p className="form-error" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="mb-3 form-password-toggle">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <div className="input-group input-group-merge">
                    <input
                      {...register('password', {
                        required: 'required',
                        minLength: {
                          value: 5,
                          message: 'min length is 5',
                        },
                      })}
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                      aria-describedby="password"
                    />
                    {errors.password && (
                      <p className="form-error" role="alert">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>
                <button type="submit" className="btn btn-primary d-grid w-100">
                  Sign up
                </button>
              </form>
              <p className="text-center">
                <span>Already have an account?</span>
                <a href="/login">
                  <span>Sign in instead</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
