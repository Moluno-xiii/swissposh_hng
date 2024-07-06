import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import WomenPage from "../pages/WomenPage";
import MenPage from "../pages/MenPage";
import Home from "../pages/Home";
import ErrorElement from "../components/ErrorElement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/women",
        element: <WomenPage />,
        index: true,
      },
      {
        path: "/men",
        element: <MenPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />;
  </React.StrictMode>,
);




