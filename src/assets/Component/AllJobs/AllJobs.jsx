import { useEffect, useState } from "react";
import SingleJobs from "../SingleJobs/SingleJobs";

const AllJobs = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [loadJobs, setLoadJobs] = useState( 4 );

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/developerMohib/career-hub-json-jobs/master/job-json-added"
    )
      .then((res) => res.json())
      .then((data) => setAllJobs(data));
  }, []);

  const handleDataLoader = () => {
    setLoadJobs(allJobs.length)
  };

  console.log(allJobs, "all jobs ");

  return (
    <div>
      <div className="md:grid grid-cols-2 gap-5">

        {allJobs.slice(0, loadJobs).map((job) => ( // New addition , nice works 
          <div key={job.id}>
            <SingleJobs job={job}> </SingleJobs>
          </div>
        ))}
      </div>

      <div className={ loadJobs === allJobs.length && "hidden"}>
        <div className=" card-actions justify-center py-10 ">
        <button onClick={ handleDataLoader } className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white ">
          View All Jobs
        </button>
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
