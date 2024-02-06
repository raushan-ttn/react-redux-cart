import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Client from "./pages/Client";
import Service from "./pages/Service";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/about-client",
        element: <Client />,
      },
      {
        path: "/about-service",
        element: <Service />,
      }
      // {
      //     path: "/login",
      //     element: (
      //         <AuthLayout authentication={false}>
      //             <Login />
      //         </AuthLayout>
      //     ),
      // },
      // {
      //     path: "/signup",
      //     element: (
      //         <AuthLayout authentication={false}>
      //             <Signup />
      //         </AuthLayout>
      //     ),
      // },
      // {
      //     path: "/all-posts",
      //     element: (
      //         <AuthLayout authentication>
      //             {" "}
      //             <AllPosts />
      //         </AuthLayout>
      //     ),
      // },

      // {
      //     path: "/post/:slug",
      //     element: <Post />,
      // },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
