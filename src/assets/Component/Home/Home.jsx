import Banner from "../Banner/Banner";
import FeaturesJobs from "../FeaturesJobs/FeaturesJobs";
import Footer from "../Footer/Footer";
import JobsCategory from "../JobsCategory/JobsCategory";
import Navber from "../Navber/Navber";

const Home = () => {
  return (
    <div>
      <div className="maxWidth">
        <Navber> </Navber>
        <Banner> </Banner>
        <JobsCategory> </JobsCategory>
        <FeaturesJobs> </FeaturesJobs>
      </div>
      <Footer> </Footer>
    </div>
  );
};

export default Home;
