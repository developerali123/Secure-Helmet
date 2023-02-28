import React from "react";
import Container from "react-bootstrap/esm/Container";
import img from "../images/secure logo.png";

export default function Footer() {
  return (
    <div className="footer">
      <Container className="footer-container">
        <div className="sec1">
          <div className="footer-logo">
            <img src={img} alt="" srcset="" width={"100px"} />
            <div className="footer-caption">
              <h4>Secure Setup Ltd</h4>
              <p>Helmet custom designer</p>
            </div>
          </div>
          <p className="para">
            Secure Setup Ltd, The Pakistan Helmet Factory, We Are Good With
            Helmet Manufacturing
          </p>
          <div className="footer-address">
            <div className="footer-addressinfo">
              <i class="fa-solid fa-location-dot"></i>
              <p>
                PMAS arid agriculture university Rawalpind , Punjab , Pakistan
              </p>
            </div>
            <div className="footer-addressinfo">
              <i class="fa-solid fa-envelope"></i>
              <p>SecureStartup@gmail.com</p>
            </div>
            <div className="footer-addressinfo">
              <i class="fa-solid fa-phone"></i>
              <p>+92-123-4567890</p>
            </div>
          </div>
        </div>
        <div className="sec2">
          <h2>Category</h2>
          <div className="line"></div>
          <ul>
            <li>Home</li>
            <li>Career</li>
            <li>About</li>
            <li>Contact</li>
            <li>Testinominal</li>
          </ul>
        </div>
        <div className="sec3">
          <h2>Products</h2>
          <div className="line"></div>
          <ul>
            <li>Bicycle Helmet</li>
            <li>Climbing helmet</li>
            <li>Helmet Accessories</li>
            <li>Ski Helmet</li>
            <li>Skate Helmet</li>
          </ul>
        </div>
        <div className="sec4">
          <h2>Contact</h2>
          <div className="line"></div>
          <p className="para">
            Secure Setup Ltd, The Pakistan Helmet Factory, We Are Good With
            Helmet Manufacturing
          </p>
          <div className="footer-contact">
            <input type="email" name="" id="" placeholder="Enter Your Email" />
            <input type="submit" value="Subscribe to Newsletter" />
          </div>
        </div>
      </Container>
      <div className="copyright">
        <span className="company">Secure Startup Ltd</span>|<span className="location">PMAS arid Agriculture</span><span>Copyright© 2023 - 2030</span>
      </div>
    </div>
  );
}
