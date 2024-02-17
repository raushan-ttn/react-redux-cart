import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import {
  Home,
  About,
  AddProductPage,
  Products,
  ProductDetail,
  AddService,
  ErrorPage,
  Login,
  Register,
} from './pages';
import { AuthLayout } from './components/admin';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: (
          <AuthLayout authentication={false}>
            <Home />
          </AuthLayout>
        ),
      },
      {
        path: '/about',
        element: (
          <AuthLayout authentication={false}>
            <About />
          </AuthLayout>
        ),
      },
      {
        path: '/products',
        element: (
          <AuthLayout authentication>
            <Products />
          </AuthLayout>
        ),
      },
      {
        path: '/add-product',
        element: (
          <AuthLayout authentication>
            <AddProductPage />
          </AuthLayout>
        ),
      },
      {
        path: '/add-service',
        element: (
          <AuthLayout authentication>
            <AddService />
          </AuthLayout>
        ),
      },
      {
        path: '/login',
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: '/register',
        element: (
          <AuthLayout authentication={false}>
            <Register />
          </AuthLayout>
        ),
      },
      {
        path: '/products/:id',
        element: (
          <AuthLayout authentication={false}>
            <ProductDetail />
          </AuthLayout>
        ),
      },
      // {
      //     path: "/post/:slug",
      //     element: <Post />,
      // },
    ],
  },
]);
export default Router;
