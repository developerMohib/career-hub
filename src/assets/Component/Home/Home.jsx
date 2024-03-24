
import Banner from "../Banner/Banner";
import FeaturesJobs from "../FeaturesJobs/FeaturesJobs";
import JobsCategory from "../JobsCategory/JobsCategory";

const Home = () => {
  return (
    <div>
      <div className="maxWidth">
        <Banner> </Banner>
        <JobsCategory> </JobsCategory>
        <FeaturesJobs> </FeaturesJobs>
      </div>
    </div>
  );
};

export default Home;
