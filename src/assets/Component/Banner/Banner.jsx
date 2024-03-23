const Banner = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <a className="userHero md:flex justify-end" href="https://ibb.co/xjgFKBk">
            <img className="md:w-1/2"
              src="https://i.ibb.co/FwYHkyr/user.jpg"
              alt="user"
              border="0"
            />
          </a>
          <div className="md:w-96 text-left">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
