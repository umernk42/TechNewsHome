import React from "react";
import imgWeb3Mobile from "../assets/images/image-web-3-mobile.jpg";
import imgWeb3Desk from "../assets/images/image-web-3-desktop.jpg";

function Hero({ windowWidth }) {
  return (
    <div className="hero">
      <picture>
        <img
          src={windowWidth < 768 ? imgWeb3Mobile : imgWeb3Desk}
          alt="imgWeb3"
        />
      </picture>
      <div className="hero-content">
        <h1>The Bright Future of Web 3.0 ?</h1>
        <div className="hero-content-detail">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
