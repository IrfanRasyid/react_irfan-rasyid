// import './style.css';
// import './main.js';
import Img from "./img.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "https://code.jquery.com/jquery-3.6.0.min.js";

function Hero() {
  return (
    <>
      <div className="container-fluid bg-primary text-white p-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-4 bold-text">
              Better Solution For Your Business
            </h1>
            <p className="lead">
              We are a team of talented designers making websites with
              Bootstrap.
            </p>
            <div className="d-flex">
              <a href="#" className="btn btn-light btn-lg me-3">
                Get Started
              </a>
              <a href="#" className="btn btn-light btn-lg">
                Watch Video
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src={Img}
              alt="Your Image"
              className="img-fluid rounded-circle"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
