import React from 'react';
import { HeaderPage } from '../../components';
import { Outlet } from 'react-router-dom';

const ProductLayout = () => {
  return (
    <>
      <HeaderPage />
      <Outlet />
    </>
  );
};

export default ProductLayout;
