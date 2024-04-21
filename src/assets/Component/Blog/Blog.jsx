import PropTypes from 'prop-types';

const Blog = ( {blog} ) => {
    const {logo,job_title,location,salary} = blog;

    return (
        <div> 
      <div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src={logo}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> {job_title} </h2>
            <p className='text-xl'> {salary} </p>
            <p className='text-xl'> {location} </p>
            <div className="card-actions">
              <button className="btn btn-primary"> Read More </button>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

Blog.propTypes = {
    blog:PropTypes.object
}

export default Blog;