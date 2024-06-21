import "../App.css";
import React, { useEffect } from "react";
import AboutSection from "../components/AboutSection";
import HomeSection from "../components/HomeSection";
import SecureNavbar from "../components/SecureNavbar";
import Protection from "../components/Protection";
import Testimonials from "../components/Testinominal";
import Features from "../components/Features";
import Footer from "../components/Footer";
import img from "../images/about1.png";
import img1 from "../images/about2.png";
import img2 from "../images/about3.png";
import img3 from "../images/playstore.png";
import img4 from "../images/appstore.png";
import img5 from "../images/protection.png";
import img6 from "../images/mission.png";
import img7 from "../images/product.png";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <SecureNavbar name="home" />
      <HomeSection />
      <AboutSection
        text="According to the 2014 World Health Organization report, 2.69% of Pakistanis die due to road accidents every year. Do you know that in Punjab only, there were over 360,000 road accidents affecting nearly 400,000 people in 2021? These accidents took the lives of over 4,000 people."
        img={img}
        i="1"
      />
      <AboutSection
        text="Riding a motorcycle can be an adrenaline rush, but accidents can happen anytime, anywhere. So, to keep you and your loved ones protected, we came up with Secure - the ultimate accident detection device for bikers."
        img={img1}
        i="2"
      />
      <Features />
      <Container>
        <h2 className="works">How It Secure’s</h2>
      </Container>
      <AboutSection
        text="Designed to attach to your helmet, Secure uses cutting-edge technology to detect an accident and immediately send a signal to your designated contacts along with your exact location. With Secure, you can ride with peace of mind, knowing that in the event of an emergency, help will be on the way."
        img={img2}
        i="2"
      />
      <Container>
        <div className="box">
          <p>Don't compromise on safety while riding your motorcycle.</p>
          <p>
            <span>Get Secure today</span> and enjoy peace of mind while you
            explore the open roads.
          </p>
          <p>ٖ Order now and enjoy a secure ride!"</p>
          <div className="box1">
            <Button>Buy Now</Button>
            <div>
              <img src={img3} alt="" srcset="" className="img1" />
              <img src={img4} alt="" srcset="" />
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="box3">
          <Protection
            img={img5}
            text="Before"
            para="Let your emergency contacts know you're heading out for a ride and, if you choose, to follow your ride in real-time."
          />
          <Protection
            img={img5}
            text="During"
            para="If Secure detects potentially dangerous forces to the head, it will sound an alarm on your phone and start a countdown on your screen."
          />
          <Protection
            img={img5}
            text="After"
            para="If you're unable to cancel the countdown, your emergency contacts will receive a text with your crash location."
          />
        </div>
      </Container>
      <Container>
        <h2 className="mission">
          Our <span>M</span>ission
        </h2>
      </Container>
      <AboutSection
        img={img6}
        text="Designed to attach to your helmet, Secure uses cutting-edge technology to detect an accident and immediately send a signal to your designated contacts along with your exact location. With Secure, you can ride with peace of mind, knowing that in the event of an emergency, help will be on the way."
        i="2"
      />
      <Container>
        <div className="box4">
          <img src={img7} alt="" srcset="" />
          <Button>Try Now</Button>
        </div>
      </Container>
      <Testimonials />
      <Container>
      <div className="box1">
      <div>
        <Button>Buy Now</Button>
        <Button className="btn3">Sign Up</Button>
        </div>
        <div>
          <img src={img3} alt="" srcset="" className="img1" />
          <img src={img4} alt="" srcset="" />
        </div>
      </div>
      </Container>
      <Footer />
    </>
  );
}
