import React from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import img from "../images/helmet.png";
import img1 from "../images/vector-2.svg";
export default function Home() {
  return (
    <Container>
      <div className="home">
        <div>
          <div className="heading">
            <h1 className="heading-text">SECURE</h1>
            <h1 className="heading-flip">
              {" "}
              <span>Life</span>
            </h1>
          </div>
          <div className="text">
            <p>
              Go safe, move safe, stay safe, leave safe and then back
              safe…Wishing you a safe journey.
            </p>
          </div>
          <div className="text">
            <p>
              <h3>Be aware, take care.</h3>
            </p>
          </div>
          <div className="homebtn">
            <Button className="buttons me-3 btn1">View Items</Button>
            <Button className="buttons btn2">Shop Now</Button>
          </div>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
      <div class="vector">
        <img src={img1} alt="" srcset="" />
        <h2>OUR JOURNEY</h2>
      </div>
    </Container>
  );
}
