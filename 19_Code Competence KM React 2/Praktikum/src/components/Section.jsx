import cloud from "../assets/image/cloud.png";
import mountainFront from "../assets/image/mountains_front.png";
import sun from "../assets/image/sun.png";
import mountainBehind from "../assets/image/mountains_behind.png";
import React, { useEffect, useState } from "react";

function Section() {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollValue(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sunStyle = {
    top: `${scrollValue * 1.05}px`,
  };

  const cloudStyle = {
    left: `${scrollValue * 0.25}px`,
  };

  const mountainsBehindStyle = {
    top: `${scrollValue * 0.5}px`,
  };

  const textStyle = {
    marginRight: `${scrollValue * 3.5}px`,
    marginTop: `${scrollValue * 1.5}px`,
  };

  const btnStyle = {
    marginTop: `${scrollValue * 1.5}px`,
  };

  return (
    <section>
      <img src={cloud} id="cloud" style={cloudStyle} alt="Cloud" />
      <img src={sun} id="sun" style={sunStyle} alt="Sun" />
      <img
        src={mountainBehind}
        id="mountains_behind"
        style={mountainsBehindStyle}
        alt="Mountains Behind"
      />
      <img
        src={mountainFront}
        id="mountains_front"
        style={{ top: 0 }}
        alt="Mountains Front"
      />
      <h2 id="text" style={textStyle}>
        Selamat Datang
      </h2>
      <a href="#" className="btn" id="btn" style={btnStyle}>
        Explore
      </a>
    </section>
  );
}

export default Section;
