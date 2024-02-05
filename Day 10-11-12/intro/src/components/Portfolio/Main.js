import React from 'react';
import { Link } from 'react-router-dom';
const Main = () => {
  return (
    <div className='mb-5'>
      <main className='mb-5'>
        <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
          <div className="carousel-item active">
              <img src={'../assets/img/full.jpg'} className="d-block w-100 h-100 object-fit-cover border rounded" alt="Project Highlight" />
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Project highlight</h1>
                  <p className="opacity-75">Description/Caption of my projects</p>
                  <p><Link className="btn btn-lg btn-warning text-dark" href="#">Contact me</Link></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
            <img src="https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100 object-fit-cover border rounded" alt="Project Highlight" />
              <div className="container">
                <div className="carousel-caption">
                  <h1>Another example of Project.</h1>
                  <p>Project description and stacks used</p>
                  <p><Link className="btn btn-lg btn-warning text-dark" href="#">See Project</Link></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
            <img src="https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100 object-fit-cover border rounded" alt="Project Highlight" />
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
              <img src="https://digiviewtechnologies.com/wp-content/uploads/2022/06/Front-End.png" className="bd-placeholder-img rounded-circle" width="140" height="140" alt="Front End Service" />
              <h2 className="fw-normal">Front End</h2>
              <p>Tech Stack - HTML, CSS, JS, Bootstrap, Tailwind, and Frameworks</p>
              <p><Link className="btn btn-warning" href="#">See Projects</Link></p>
            </div>

            <div className="col-lg-4">
            <img src="https://appslanka.lk/storage/images/8ca6b17d8e2b6d5565e2a37c07becd93.jpg" className="bd-placeholder-img rounded-circle" width="140" height="140" alt="Front End Service" />
              <h2 className="fw-normal">Back End</h2>
              <p>Tech Stack - Node.js, Express, MongoDB, MySQL, Mongoose, PHP, Python</p>
              <p><Link className="btn btn-warning" href="#">See Projects</Link></p>
            </div>
            <div className="col-lg-4">
            <img src="https://images-platform.99static.com/XzzJBjIObP5KhDx9MUfD0ulacXo=/500x500/top/smart/99designs-contests-attachments/28/28810/attachment_28810462" className="bd-placeholder-img rounded-circle" width="140" height="140" alt="Front End Service" />
              <h2 className="fw-normal">FullStack</h2>
              <p>Combination of Front and Back end technology with Hosting and cloud Tech</p>
              <p><Link className="btn btn-warning" href="#">See Projects</Link></p>
            </div>
          </div>
          <hr className="featurette-divider" />
          <h1 className="text-center mb-5 text-secondary" id='Projects'>PROJECTS</h1>
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">Front End Development. <span className="text-body-secondary">Creating User Interfaces.</span></h2>
              <p className="lead">Building engaging and responsive front-end experiences using technologies like HTML, CSS, JavaScript, Bootstrap, Tailwind, and various frameworks.</p>
            </div>
            <div className="col-md-5">
              <img src="https://bitnetservices.uk/image/cache/catalog/5faac36a1e54ec6b1d7e7a93c5f169b71aa1d07d-500x500.png" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded" alt="Front End Development" />
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
          <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading fw-normal lh-1">Back End Development. <span className="text-body-secondary">Powering the Server Side.</span></h2>
                <p className="lead">Crafting robust server-side applications and databases using technologies such as Node.js, Express, MongoDB, MySQL, Mongoose, PHP, and Python. Explore the world of back-end development and ensure seamless functionality and data management for your applications.</p>
            </div>
            <div className="col-md-5 order-md-1">
            <img src="https://5.imimg.com/data5/SELLER/Default/2023/9/343860989/SJ/JM/LF/4192572/back-end-development-service-500x500.jpg" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded" alt="Front End Development" />
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
          <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">Fullstack Development. <span className="text-body-secondary">Bringing Front and Back Ends Together.</span></h2>
              <p className="lead">Embarking on the journey of fullstack development, integrating both front-end and back-end technologies harmoniously. Leverage the synergy of diverse technologies, ensuring a comprehensive and seamless user experience. Dive into the world of fullstack development and explore the art of building end-to-end solutions.</p>
          </div>
            <div className="col-md-5">
            <img src="https://www.eligocs.com/wp-content/uploads/2022/06/ful-lstack-developer-01.png" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded" alt="Front End Development" />
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
