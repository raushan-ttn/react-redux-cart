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
  Logout,
} from './pages';

// import { AuthLayout } from './components/admin';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/about-client',
        element: <Client />,
      },
      {
        path: '/about-service',
        element: <Service />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      // {
      //     path: "/post/:slug",
      //     element: <Post />,
      // },
    ],
  },
]);
export default Router;
