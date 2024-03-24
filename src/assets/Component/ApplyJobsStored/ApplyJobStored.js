

const getApplyJob = () => {
    const getApplyJobs = localStorage.getItem('job-applied');
    if(getApplyJobs){
        return JSON.parse(getApplyJobs)
    }
   return [ ]
}
const setApplyJob = (id) =>{
    const setApplyJobs = getApplyJob( );
    console.log(setApplyJobs, 'from aplied page');

    // const intId = parseInt(id);

    // console.log(typeof id, id, 'and' ,typeof(intId), intId, 'from aplied page');

    const exist = setApplyJobs.find(jobID => jobID === id);
    // const exist = setApplyJobs.find(jobID => jobID);

    // console.log( typeof exist, exist, 'aplied page');

    if(!exist){
        setApplyJobs.push(id);
        localStorage.setItem('job-applied' , JSON.stringify(setApplyJobs));
    }
}

export{getApplyJob, setApplyJob}