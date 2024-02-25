import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import AppleProducts, {
  loader as AppleLoader,
} from './pages/admin/AppleProducts';
import ProductLayout from './pages/Layout/ProductLayout';
import {
  Home,
  About,
  AddProductPage,
  AddService,
  ErrorPage,
  Login,
  Register,
  CartPage,
} from './pages';
import { AuthLayout } from './components/admin';
import { ProductsList, ProductPage } from './components';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        // path: '',
        index: true, // we can use index: true in case of blank path.
        element: (
          <AuthLayout authentication={false}>
            <Home />
          </AuthLayout>
        ),
      },
      {
        path: 'about',
        element: (
          <AuthLayout authentication={false}>
            <About />
          </AuthLayout>
        ),
      },
      {
        path: 'products',
        element: (
          <AuthLayout authentication>
            <ProductLayout />
          </AuthLayout>
        ),
        children: [
          {
            index: true,
            element: (
              <AuthLayout authentication>
                <ProductsList />
              </AuthLayout>
            ),
          },
          {
            path: ':id',
            element: (
              <AuthLayout authentication>
                <ProductPage />
              </AuthLayout>
            ),
          },
          {
            path: 'apple-products',
            element: (
              <AuthLayout authentication>
                <AppleProducts />
              </AuthLayout>
            ),
            loader: AppleLoader,
          },
          {
            path: 'add',
            element: (
              <AuthLayout authentication>
                <AddProductPage />
              </AuthLayout>
            ),
          },
        ],
      },
      {
        path: 'add-service',
        element: (
          <AuthLayout authentication>
            <AddService />
          </AuthLayout>
        ),
      },
      {
        path: 'login',
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: 'register',
        element: (
          <AuthLayout authentication={false}>
            <Register />
          </AuthLayout>
        ),
      },
      {
        path: 'cart',
        element: (
          <AuthLayout authentication>
            <CartPage />
          </AuthLayout>
        ),
      },
    ],
  },
]);
export default Router;
