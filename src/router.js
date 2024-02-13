import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import {
  Home,
  About,
  Client,
  Service,
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
        path: '/add-client',
        element: (
          <AuthLayout authentication={true}>
            <Client />
          </AuthLayout>
        ),
      },
      {
        path: '/add-service',
        element: (
          <AuthLayout authentication={true}>
            <Service />
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
      // {
      //     path: "/post/:slug",
      //     element: <Post />,
      // },
    ],
  },
]);
export default Router;
