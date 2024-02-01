import React from 'react';
import { Link } from 'react-router-dom';
const Main = () => {
  return (
    <div>
      <main>
        <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Project highlight</h1>
                  <p className="opacity-75">Description/Caption of my projects</p>
                  <p><Link className="btn btn-lg btn-warning text-dark" href="#">Contact me</Link></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
              <div className="container">
                <div className="carousel-caption">
                  <h1>Another example of Project.</h1>
                  <p>Project description and stacks used</p>
                  <p><Link className="btn btn-lg btn-warning text-dark" href="#">See Project</Link></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
              <div className="container">
                <div className="carousel-caption text-end">
                  <h1>Services Offered as Web Dev</h1>
                  <p>Highlight your Technology Stack.</p>
                  <p><Link className="btn btn-lg btn-warning text-dark" href="#">See Github</Link></p>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container marketing">
          <div className="row">
            <h1 className="text-center mb-5 text-secondary" id='Services'>SERVICES OFFERED</h1>
            <div className="col-lg-4">
              <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
              <h2 className="fw-normal">Front End</h2>
              <p>Tech Stack - HTML, CSS, JS, Bootstrap, Tailwind, and Frameworks</p>
              <p><Link className="btn btn-warning" href="#">See Projects</Link></p>
            </div>
            <div className="col-lg-4">
              <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
              <h2 className="fw-normal">Back End</h2>
              <p>Tech Stack - Node.js, Express, MongoDB, MySQL, Mongoose, PHP, Python</p>
              <p><Link className="btn btn-warning" href="#">See Projects</Link></p>
            </div>
            <div className="col-lg-4">
              <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
              <h2 className="fw-normal">FullStack</h2>
              <p>Combination of Front and Back end technology with Hosting and cloud Tech</p>
              <p><Link className="btn btn-warning" href="#">See Projects</Link></p>
            </div>
          </div>
          <hr className="featurette-divider" />
          <h1 className="text-center mb-5 text-secondary" id='Projects'>PROJECTS</h1>
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">Lorem ipsum dolor sit amet. <span className="text-body-secondary">It’ll blow your mind.</span></h2>
              <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis neque tempora cum placeat ducimus rem expedita perspiciatis id deserunt. Aliquam?</p>
            </div>
            <div className="col-md-5">
              <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">Lorem ipsum dolor sit amet. <span className="text-body-secondary">See for yourself.</span></h2>
              <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, voluptatum itaque? At cum laudantium vero explicabo fugit debitis doloribus! Ipsam!</p>
            </div>
            <div className="col-md-5 order-md-1">
              <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">Lorem ipsum dolor sit amet. <span className="text-body-secondary">Contact Me.</span></h2>
              <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab officiis beatae eos harum quae nesciunt odio deleniti suscipit, officia quam?</p>
            </div>
            <div className="col-md-5">
              <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
            </div>
            <div className="your-class">
         
            </div>
          </div>
          <hr className="featurette-divider" />
        </div>
        {/* CTA */}
        <section className="container-fluid">
          <div className="container">
          <h1 className="text-center mb-5 text-secondary" id='Contact'>CONTACT ME</h1>
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4" />
              </div>
              <div className="form-floating">
                <textarea className="form-control w-50" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '100px' }}></textarea>
                <label htmlFor="floatingTextarea2">Comments</label>
              </div>
              <div className="input-group has-validation">
                <span className="input-group-text">+63</span>
                <div className="form-floating">
                  <input type="text" className="form-control" id="floatingInputGroup2" style={{ height: '30px', width: '48%' }} placeholder="Mobile Number" />
                  <label htmlFor="floatingInputGroup2">Mobile Number</label>
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Main;
