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
  // console.log(jobs);
  return (
    
    <div>
      
      <div className="md:w-2/5 mx-auto text-center my-10 ">
        <h3 className="font-bold text-2xl">Job Category List</h3>
        <p>Explore thousands of job opportunities with all the information you need. Its your futuren</p>
      </div>

      <div className="md:grid grid-cols-4 gap-5 ">
        {jobs.map((job) => ( 
          <div key={job.id} className="card bg-neutral text-neutral-content my-5">
            <p> { job.logo } </p>
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
