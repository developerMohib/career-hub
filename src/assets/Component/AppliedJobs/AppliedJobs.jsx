// import { useLoaderData } from "react-router-dom";

import { useEffect, useState } from "react";
// import { setApplyJob } from "../ApplyJobsStored/ApplyJobStored";
import { MdArrowDropDown } from "react-icons/md";

const AppliedJobs = () => {

    // const jobs = useLoaderData()
    // console.log(jobs , 'applied jobs');
    // console.log( Array.isArray(jobs , 'applied jobs') )

    const [ jobs , setJobs ] = useState([]);
    const [displyJob, setDisplayJobs] = useState([]);

    console.log(jobs, 'all jobs from aplied jobs')

    const handleFiter = filterjob => {
        if(filterjob === 'all'){
            setDisplayJobs(jobs)
        }
        else if( filterjob === 'remote' ){
            const remoteJob = jobs.filter(item => item.remote_or_onsite === "Remote");
            console.log(remoteJob , 'all filter') ;
            setDisplayJobs(remoteJob)
        }
        else if( filterjob === 'onsite' ){
            const onsiteJob = jobs.filter(item => item.remote_or_onsite === "Onsite");
            setDisplayJobs(onsiteJob)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://raw.githubusercontent.com/developerMohib/career-hub-json-jobs/master/job-json-added');
            const data = await response.json();
            // filter kora lagbe 

            // const myValue = localStorage.getItem('job-applied');
            // if(myValue){
            //     const value = JSON.parse(myValue);
            //     const final = data.filter(item => value.includes(item.id));
            //     setJobs(final)
            // }
            setJobs(data)
            setDisplayJobs(data)
        };
    
        fetchData();
    },[])


    // console.log(jobs, 'not async');

    // console.log( Array.isArray(jobs), "paici", jobs);

    // useEffect(()=>{

    //     const job = jobs.filter(job => job.id === id )
    // },[])


    return (
        <div>
            <h1 className="py-10 text-center font-bold text-2xl"> You have Applied Already </h1>
            
            <div>
            <div className="dropdown ">
                <div tabIndex={0} role="button" className="btn m-1">Filter Jobs <MdArrowDropDown /> </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={ () => handleFiter( "all" ) } ><a>All</a></li>
                    <li onClick={ () => handleFiter( "remote" ) } ><a> Remote </a></li>
                    <li onClick={ () => handleFiter( "onsite" ) } ><a> Onsite </a></li>
                </ul>
                </div>
            </div>

            {
                displyJob.map( (job, idx)=> (
                    <div key={idx} >
                        <div className="my-10 bg-base-300 p-10 rounded-lg">
                            <img src={job?.logo} alt="" />
                            <h1 className="font-bold text-2xl "> {job?.job_title} </h1> 
                            <h2 className="text-xl"> {job?.remote_or_onsite} </h2>
                            <h2 className="text-xl"> {job?.company_name} </h2>
                            <h2 className="text-xl"> {job?.location} </h2>
                            <button className="btn btn-primary"> View Details </button>
                        </div>
                    </div>
                 ) )

            }
            
        </div>
    );
};

export default AppliedJobs;