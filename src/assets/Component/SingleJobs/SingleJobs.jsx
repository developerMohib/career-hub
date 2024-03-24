import PropTypes from "prop-types";
import "./SingleJobs.css";
import { CiDollar, CiLocationOn} from "react-icons/ci";
import { Link } from "react-router-dom";

const SingleJobs = ({ job }) => {
  const {
    id,
    job_title,
    company_name,
    job_type,
    location,
    logo,
    remote_or_onsite,
    salary,
  } = job;
  return (
    <div>
      <div>
        <div className="card card-compact bg-base-100 shadow-xl jobs-logo-size p-10">
          <figure>
            <img src={logo} alt={job_title} />
          </figure>
          <div className="card-body p-0">
            <h2 className="card-title">{job_title}</h2>
            <p>{company_name}</p>
            <div>
              <button className="btn btn-outline mx-1">
                {remote_or_onsite}
              </button>
              <button className="btn btn-outline mx-1"> {job_type} </button>
            </div>
            <div className="flex gap-2">
              <p className="flex gap-2 items-center" > <CiLocationOn /> {location} </p>
              <p className="flex gap-2 items-center" > <CiDollar /> {salary} </p>
            </div>
            <div className="card-actions">
                <Link to={`/job/${id}`}>
                <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">
                    View Details
                </button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SingleJobs.propTypes = {
  job: PropTypes.object,
};

export default SingleJobs;
