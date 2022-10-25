import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Layout from "./components/layout/layout.jsx";
import Home from "./views/home/home.jsx";
import Profil from "./views/profil/profil.jsx";
import Error from "./views/error/error.jsx";

import './index.scss'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/profil/:userId",
                element: <Profil />,
            },
            {
                path: "/404",
                element: <Error />,
            },
            {
                path: "*",
                element: <Error />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)
