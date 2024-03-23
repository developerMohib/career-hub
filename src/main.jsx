
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import Home from './assets/Component/Home/Home.jsx';
import JobsCategory from './assets/Component/JobsCategory/JobsCategory.jsx';
import AppliedJobs from './assets/Component/AppliedJobs/AppliedJobs.jsx';
import Statictics from './assets/Component/Statictics/Statictics.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home> </Home>,
    children:[
      {
        path: "/jobs",
        element: <JobsCategory> </JobsCategory>
      },
      {
        path:"/applied-jobs",
        element: <AppliedJobs> </AppliedJobs>
      },
      {
        path: "/statictics",
        element: <Statictics> </Statictics>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
