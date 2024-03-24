
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import Home from './assets/Component/Home/Home.jsx';
// import JobsCategory from './assets/Component/JobsCategory/JobsCategory.jsx';
import AppliedJobs from './assets/Component/AppliedJobs/AppliedJobs.jsx';
import Statictics from './assets/Component/Statictics/Statictics.jsx';
import Root from './assets/Component/Root/Root.jsx';
import AllJobs from './assets/Component/AllJobs/AllJobs.jsx';
import JobDetails from './assets/Component/JobsDetails/JobDetails.jsx';
import Blogs from './assets/Component/Blogs/Blogs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root> </Root>,

    children:[
      {
        path: "/",
        element: <Home> </Home>,
      },
      {
        path: "/jobs",
        element: <AllJobs> </AllJobs>
        // element: <JobsCategory> </JobsCategory>
      },
      {
        path:"/applied-jobs",
        element: <AppliedJobs> </AppliedJobs>,
        loader : () => fetch(`https://raw.githubusercontent.com/developerMohib/career-hub-json-jobs/master/job-json-added` )
      },
      {
        path: "/statictics",
        element: <Statictics> </Statictics>
      },
      {
        path: "/job/:id",
        element: <JobDetails> </JobDetails>,
        loader: () => fetch(`https://raw.githubusercontent.com/developerMohib/career-hub-json-jobs/master/job-json-added` )
      },
      {
        path: "/blogs",
        element: <Blogs> </Blogs>

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
