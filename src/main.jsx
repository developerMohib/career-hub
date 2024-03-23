import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './assets/Component/Home/Home.jsx';
import JobsCategory from './assets/Component/JobsCategory/JobsCategory.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home> </Home>,
    children:[
      {
        path: "/jobs",
        element: <JobsCategory> </JobsCategory>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
