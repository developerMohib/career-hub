import { useEffect, useState } from "react";
import Blog from '../Blog/Blog';

const Blogs = () => {    

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch(
            "https://raw.githubusercontent.com/developerMohib/career-hub-json-jobs/master/job-json-added"
        )
        .then((res) => res.json())
        .then((data) => setBlogs(data));
    }, []);

    console.log(blogs, "blog");

    return (
        <div>
            
            <div className="md:grid grid-cols-3 gap-5 my-10 ">
            {
                blogs.map((blog, idx) => <Blog key={idx} blog= {blog} />)
            }
            </div>
        </div>
    );
};

export default Blogs;
