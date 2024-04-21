import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { setApplyJob } from '../ApplyJobsStored/ApplyJobStored';

const JobDetails = () => {
  // const loadedData = useLoaderData();
  // const allCakri = Array.isArray(loadedData) ? loadedData : [];
  // console.log( Array.isArray(allCakri) , 'all cakri is array or not ? ', (allCakri.length) );

  const { id } = useParams();
  
  // const cakri = allCakri.find(cakri => cakri.id == id);
  // // const cakri = allCakri.find((cakri) => cakri.id == id);
  // console.log(cakri, id);
  // // console.log( allCakri, "id ", id);

  const [cakri, setCakri] = useState([]);
  const [employ, setEmploy] = useState({});

//   const handleApplyJobs = () => {
//         const test = setApplyJob( id );

//         console.log( typeof test , 'form job details');

//         toast("You Have Applied Successfully!");
//   }

const handleApplyJobs = () => {
    const parId = parseInt(id)
    const success = setApplyJob(parId);

    console.log(typeof success, 'from job details');

    if (success) {
        toast("You Have Applied Successfully!");
    } else {
        // Handle case where the job was not applied (perhaps it already existed)
        console.log("Job already applied!");
        toast("Job already applied!");
    }
}

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/developerMohib/career-hub-json-jobs/master/job-json-added`
    )
      .then((res) => res.json())
      .then((data) => setCakri(data));
  }, []);
//   console.log(cakri);

  useEffect(() => {
    const parId = parseInt(id);
    // const employ = cakri.find(employ => employ);
    const employ = cakri.find((employ) => employ.id == parId);
    // console.log(employ);
    // console.log(employ?.job_title);
    // console.log(employ.id)
    if (employ) {
      setEmploy(employ);
    }
    // setEmploy(employ)
  }, [cakri, id]);

  return (
    <div>
      <div className="p-10">
        <h3 className="text-2xl text-center font-semibold"> Job Details </h3>
      </div>
      <div className="grid md:grid-cols-3 gap-5 my-10">
        <div className="md:col-span-2 bg-base-300 p-10 rounded-lg space-y-2">
          <p> <span className="text-2xl font-semibold"> Description : </span> {employ?.job_description} </p>
          <p> <span className="text-2xl font-semibold">Responsibility : </span> {employ?.job_responsibility} </p>
           <p> <span className="text-2xl font-semibold">Job Requirements : </span> {employ?.educational_requirements} </p>
          <p> <span className="text-2xl font-semibold">Company Name : </span> {employ?.company_name} </p>
          <p> <span className="text-2xl font-semibold">Job Status : </span> {employ?.remote_or_onsite} </p>
          <p> <span className="text-2xl font-semibold">Location : </span> {employ?.location} </p>
          <p> <span className="text-2xl font-semibold"> Job Type : </span> {employ?.job_type} </p>
          <p> <span className="text-2xl font-semibold">Experience : </span> {employ?.experiences} </p>
        </div>
{/* ----------------------------- */}
        <div className="bg-base-300 p-10 rounded-lg">

          <div className="p-10 text-center">
          <img src={employ?.logo} alt="" /> 
            <h3 className="text-2xl font-semibold">
              Job Details
            </h3>
          </div>

            <div>
                <h3 className="font-bold text-2xl text-center">  {employ?.job_title} </h3>
            </div>
            <div className=" py-10 ">
                <h3 className="text-2xl font-semibold">
                Contact Information 
                </h3>
                    
                <p> <span className="text-2xl font-semibold">Phone : </span> {employ?.contact_information?.phone} </p>
                <p> <span className="text-2xl font-semibold">Email : </span> {employ?.contact_information?.email} </p>
                <p> <span className="text-2xl font-semibold">Address : </span> {employ?.contact_information?.address} </p>
          </div>
            <div className="text-center">
                <button onClick={handleApplyJobs} className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white w-full hover:bg-gradient-to-tr border-none" >Apply Now</button>
            </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
