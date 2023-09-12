import "./style.css";
// import './main.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Footer() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="arsha">
              <h3>Arsha</h3>
              <address>
                A108 Adam Street <br />
                New York, NY 535022 <br />
                United States <br />
              </address>
              <p>
                <strong>Phone:</strong> +1 5589 55488 55 <br />
                <strong>Email:</strong> info@example.com
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="uslink">
              <h3>Useful Links</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="custom-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="custom-link">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="custom-link">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="custom-link">
                    Terms of service
                  </a>
                </li>
                <li>
                  <a href="#" className="custom-link">
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="services">
              <h3>Our Services</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="custom-link">
                    Web Design
                  </a>
                </li>
                <li>
                  <a href="#" className="custom-link">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="custom-link">
                    Product Management
                  </a>
                </li>
                <li>
                  <a href="#" className="custom-link">
                    Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="custom-link">
                    Graphic Design
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="social">
              <h3>Our Social Networks</h3>
              <p>
                Cras Fermentum odio eu feugiat lide par naso tierra videa magna
                derita valies
              </p>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright text-center">
        <p>
          © CopyRight <b>Arsha</b> . All Rights Reserved
        </p>
        <p>Designed by BootstrapMade</p>
      </div>
    </>
  );
}

export default Footer;
