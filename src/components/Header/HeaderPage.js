import React from "react";
import Breadcrumb from "./Breadcrumb";

const HeaderPage = () => {
  return (
    <header className="site-header d-flex flex-column justify-content-center align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <Breadcrumb />
              </ol>
            </nav>
            <h2 className="text-white">Topics Listing</h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderPage;
