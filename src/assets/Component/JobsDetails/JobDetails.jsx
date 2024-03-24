// import { useEffect, useState } from "react";
// import { useLoaderData, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

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

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/developerMohib/career-hub-json-jobs/master/job-json-added`
    )
      .then((res) => res.json())
      .then((data) => setCakri(data));
  }, []);
  console.log(cakri);

  useEffect(() => {
    const parId = parseInt(id);
    // const employ = cakri.find(employ => employ);
    const employ = cakri.find((employ) => employ.id == parId);
    console.log(employ);
    console.log(employ?.job_title);
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
        <div className="grid grid-cols-3">
            <div className="col-span-2 bg-gray-400 p-5 rounded-lg">
            <h3> {employ?.job_title} </h3>
            <img src= {employ?.logo} alt="" />
            <p> {employ?.company_name} </p>
            <p> {employ?.remote_or_onsite} </p>
            <p> {employ?.location} </p>
            <p> {employ?.job_type} </p>
            <p> {employ?.job_responsibility} </p>
            <p> {employ?.job_description} </p>
            <p> {employ?.experiences} </p>
            <p> {employ?.educational_requirements} </p>
            <p> {employ?.contact_information?.address} </p>
            <p> {employ?.contact_information?.email} </p>
            <p> {employ?.contact_information?.phone} </p>
            </div>
            <div className=""></div>
        </div>
    </div>
  );
};

export default JobDetails;
