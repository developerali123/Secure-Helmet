import React from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import img from "../images/helmet.png";
import img1 from "../images/vector-2.svg";

export default function HomeSection() {
  
  return (
    <Container>
      <div className="home">
        <div data-aos="fade-right">
          <div className="heading">
            <h1 className="heading-text">SECURE</h1>
            <h1 className="heading-flip">
              {" "}
              <span>Life</span>
            </h1>
          </div>
          <div className="text">
            <p>
            <span>Stay Protected with</span> Secure - <span>The Ultimate</span> Accident Detection <span>Device for</span> Bikers
            </p>
          </div>
          <div className="homebtn">
            <Button className="buttons me-3 btn1">View Items</Button>
            <Button className="buttons btn2">Shop Now</Button>
          </div>
        </div>
        <div>
          <img src={img} alt="" data-aos="fade-left" />
        </div>
      </div>
      <div class="vector">
        <img src={img1} alt="" srcset="" />
        <h2>OUR JOURNEY</h2>
      </div>
    </Container>
  );
}
