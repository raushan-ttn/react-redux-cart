import React from 'react';
import { Link } from 'react-router-dom';
import staticImages from '../conf/ImageConstant';
import '../assets/css/vendor/core.css';
import '../assets/css/vendor/theme-default.css';
const ErrorPage = () => {
  return (
    <div className="container-xxl container-p-y">
      <div className="misc-wrapper">
        <h2 className="mb-2 mx-2">Page Not Found :(</h2>
        <p className="mb-4 mx-2">
          Oops! 😖 The requested URL was not found on this server.
        </p>
        <Link to=".." className="btn btn-primary">
          Back to home
        </Link>
        <div className="mt-3">
          <img
            src={staticImages.E404}
            alt="page-misc-error-light"
            width="500"
            className="img-fluid"
            data-app-dark-img="illustrations/page-misc-error-dark.png"
            data-app-light-img="illustrations/page-misc-error-light.png"
          />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
