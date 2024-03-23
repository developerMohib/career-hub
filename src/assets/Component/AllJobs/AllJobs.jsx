import { useEffect, useState } from "react";
import SingleJobs from "../SingleJobs/SingleJobs";

const AllJobs = () => {
  const [allJobs, setAllJobs] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/developerMohib/career-hub-json-jobs/master/job-json-added"
    )
      .then((res) => res.json())
      .then((data) => setAllJobs(data));
  }, []);
  console.log(allJobs, "all jobs ");
  return (
    <div>
      <div className="md:grid grid-cols-2 gap-5">
        {allJobs.map((job) => (
          <div key={job.id}>
            {" "}
            <SingleJobs job={job}> </SingleJobs>{" "}
          </div>
        ))}
      </div>

      <div className="card-actions justify-center">
        <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white ">
          View All Jobs
        </button>
      </div>
    </div>
  );
};

export default AllJobs;
