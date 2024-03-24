// import { useLoaderData } from "react-router-dom";

import { useEffect, useState } from "react";
import { setApplyJob } from "../ApplyJobsStored/ApplyJobStored";
import { json } from "react-router-dom";

const AppliedJobs = () => {

    // const jobs = useLoaderData()
    // console.log(jobs , 'applied jobs');
    // console.log( Array.isArray(jobs , 'applied jobs') )

    const [ jobs , setJobs ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://raw.githubusercontent.com/developerMohib/career-hub-json-jobs/master/job-json-added');
            const data = await response.json();
            // filter kora lagbe 
            const myValue = localStorage.getItem('job-applied');
            if(myValue){
                const value = JSON.parse(myValue);
                const final = data.filter(item => value.includes(item.id));
                setJobs(final)
            }
        };
    
        fetchData();


        

        // fetch('https://raw.githubusercontent.com/developerMohib/career-hub-json-jobs/master/job-json-added')
        // .then(res => res.json())
        // .then(data => setJobs(data))
        
    },[])


    console.log(jobs, 'not async');

    console.log( Array.isArray(jobs), "paici", jobs);

    

    // useEffect(()=>{

    //     const job = jobs.filter(job => job.id === id )
    // },[])


    return (
        <div>
            <h1 className="bg-red-400">this is from Applied jobs </h1>

            {
                jobs.map( job => <h1>  hello {job.job_title} </h1>  )
            }
        </div>
    );
};

export default AppliedJobs;