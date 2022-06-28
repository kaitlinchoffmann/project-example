const About = () => {
  return(
    <div>
      <h1 className="text-center display-1">About Us</h1>
      <div className="container">
        <hr />
        <h2 className="text-center">Some Facts...</h2>
        <hr />
        {/* row 1 of facts */}
        <div className="row text-primary">
          <div className="col-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum beatae libero excepturi similique perferendis! Quaerat, assumenda possimus quis ut magni quam iusto aut eos, excepturi quas consequuntur! Nam, voluptatem hic.
          </div>
          <div className="col-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum beatae libero excepturi similique perferendis! Quaerat, assumenda possimus quis ut magni quam iusto aut eos, excepturi quas consequuntur! Nam, voluptatem hic.
          </div>
          <div className="col-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum beatae libero excepturi similique perferendis! Quaerat, assumenda possimus quis ut magni quam iusto aut eos, excepturi quas consequuntur! Nam, voluptatem hic.
          </div>
        </div>
        <button className="mt-4 btn btn-danger">Learn More</button>

        {/* row 2 of facts */}
        <hr />
        <h2 className="text-center">More Facts...</h2>
        <hr />
        <div className="row">
          <div className="col-md bg-warning p-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos sequi aut magnam et rem beatae adipisci. Dolor tempore aliquam, molestias molestiae, possimus repudiandae repellat atque cum eius eos saepe sequi!
          </div>
          <div className="col-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, beatae voluptatem expedita atque et quisquam debitis. Sequi veritatis aliquid enim repudiandae officiis. Placeat, voluptatem. Quod ex fuga aliquid assumenda vero.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;