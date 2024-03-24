

const getApplyJob = () => {
    const getApplyJobs = localStorage.getItem('job-applied');
    if(getApplyJobs){
        return JSON.parse(getApplyJobs)
    }
   return [ ]
}
const setApplyJob = (id) =>{
    const setApplyJobs = getApplyJob( );
    const exist = setApplyJobs.find(jobID => jobID.id === id);
    if(!exist){
        setApplyJobs.push(id)
        localStorage.setItem('job-applied' , JSON.stringify(setApplyJobs));
    }
}

export{getApplyJob, setApplyJob}