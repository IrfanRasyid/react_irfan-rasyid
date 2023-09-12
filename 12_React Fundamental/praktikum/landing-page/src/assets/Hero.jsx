// import './style.css';
// import './main.js';
import Img from './img.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="content">
          <h1>Better Solution For Your Business</h1>
          <p>
            We are team of talented designers making websites with Bootstrap
          </p>
          <div className="link">
            <a
              href="createAccount.html"
              type="button"
              name="button"
              className="button"
            >
              Get Started
            </a>
            <a href="#" className="vid">
              Watch Video
            </a>
          </div>
        </div>
        <figure>
          <img
            className="heroimg"
            src={Img}
            alt="img"
            width={800}
            height={400}
          />
        </figure>
      </div>
      <div className="closing">
        <article>
          <h3> Join Our Newsletter</h3>
          <p>
            Tamen quem nulla quae legam multos aute sint culpa legam noster
            magna
          </p>
        </article>
        <div className="form">
          <input className="email" type="text" name="email" />
          <a
            href="createAccount.html"
            type="button"
            name="button"
            className="button"
          >
            Subscribe
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;