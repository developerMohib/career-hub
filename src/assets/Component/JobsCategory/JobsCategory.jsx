import { useEffect, useState } from "react";

const JobsCategory = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/developerMohib/category-json-career-hub/master/category-json"
    )
      .then((res) => res.json())
      .then((data) => setJobs(data));
    //   .catch((error) => console.error(error));
  }, []);
  console.log(jobs);
  return (
    <div>
      <div>
        <h3>this is from Jobs Category</h3>
      </div>
      <div className="md:grid grid-cols-4 gap-5">
        {jobs.map((job) => ( 
          <div key={job.id} className="card bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">{job.category_name}</h2>
            <p>{job.availability}</p>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default JobsCategory;
