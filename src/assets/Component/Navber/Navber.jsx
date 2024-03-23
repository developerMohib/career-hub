import { NavLink } from "react-router-dom";
import './Navber.css'
const Navber = () => {
    const links = <>
    <li> <NavLink> Statictics </NavLink> </li>
    <li> <NavLink>Jobs</NavLink> </li>
    <li> <NavLink> Applied Jobs </NavLink> </li>
    </>
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns=""
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
                {links}
            </ul>
          </div>
          <a href="" className=" text-xl">Career Hub</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Apply Now</a>
        </div>
      </div>
    </div>
  );
};

export default Navber;
