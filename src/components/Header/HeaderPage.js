import React, { useState } from 'react';
import Breadcrumb from './Breadcrumb';

const HeaderPage = () => {
  const [title, setTitle] = useState(null);

  // Get data from child Component.
  const handleTitle = (data) => {
    if(data.length > 1){
      let counter = data.length -1;
      setTitle(data[counter]);
    }
  };

  return (
    <header className="site-header d-flex flex-column justify-content-center align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <Breadcrumb onReceiveBread={handleTitle} />
              </ol>
            </nav>
            <h2 className="text-white">{title ? title.toUpperCase() : `Topics detail`}</h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderPage;
