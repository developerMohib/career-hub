// import { useLoaderData } from "react-router-dom";

import { useEffect, useState } from "react";

const AppliedJobs = () => {

    // const jobs = useLoaderData()
    // console.log(jobs , 'applied jobs');
    // console.log( Array.isArray(jobs , 'applied jobs') )

    const [ jobs , setJobs ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://raw.githubusercontent.com/developerMohib/career-hub-json-jobs/master/job-json-added');
            const data = await response.json();
            setJobs(data);
        };
    
        fetchData();




        // fetch('https://raw.githubusercontent.com/developerMohib/career-hub-json-jobs/master/job-json-added')
        // .then(res => res.json())
        // .then(data => setJobs(data))
        
    },[])
    console.log(jobs, 'not async');

    console.log( Array.isArray(jobs), "paici", jobs)


    return (
        <div>
            <h1 className="bg-red-400">this is from Applied jobs </h1>
        </div>
    );
};

export default AppliedJobs;