// import './style.css';
// import './main.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Footer() {
  return (
    <>
      <div className="wrapperf">
        <div className="arsha">
          <h3>Arsha</h3>
          <p>
            A108 Adam Street <br />
            New York, NY 535022 <br />
            United States <br />
          </p>
          <p>
            <strong>Phone:</strong> +1 5589 55488 55 <br />
            <strong>Email:</strong> info@example.com
          </p>
        </div>
        <div className="uslink">
          <h3>Useful Links</h3>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Terms of service</a>
          </li>
          <li>
            <a href="#">Privacy policy</a>
          </li>
        </div>
        <div className="services">
          <h3>Our Services</h3>
          <li>
            <a href="#">Web Design</a>
          </li>
          <li>
            <a href="#">Web Development</a>
          </li>
          <li>
            <a href="#">Product Management</a>
          </li>
          <li>
            <a href="#">Marketing</a>
          </li>
          <li>
            <a href="#">Graphic Design</a>
          </li>
        </div>
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
      <div className="copyright">
        <p>
          © CopyRight <b>Arsha</b> . All Rights Reserved
        </p>
        <p>Designed by BootstrapMade</p>
      </div>
    </>
  );
}

export default Footer;