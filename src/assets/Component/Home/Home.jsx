import Banner from "../Banner/Banner";
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
      </div>
      <Footer> </Footer>
    </div>
  );
};

export default Home;
