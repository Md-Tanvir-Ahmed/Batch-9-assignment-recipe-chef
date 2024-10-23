

const Banner = () => {
    return (
        <div>
            <div
  className="hero min-h-screen my-5"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/3rWYmKJ/chef-pic.webp)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-lg">
      <h1 className="mb-5 text-5xl font-bold ">Discover an exceptional cooking class tailored for you!</h1>
      <p className="mb-5">
      Experience culinary excellence with our chef at the heart of a world-class kitchen. Every dish is crafted with passion and precision, bringing flavors to life in a setting designed for unforgettable dining.
      </p>
      <div className="flex gap-3 mx-auto justify-center mt-4">
        
      <button className="btn bg-green-500">Explore Now</button>
      <button className="btn bg-none">Our Feedback</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;