import React from "react";
import Container from "react-bootstrap/esm/Container";

export default function AboutSection(props) {
  return (
    <Container>
      {props.i === "1" && (
        <div className="about">
          <img src={props.img} alt="" srcset="" data-aos="fade-right" />
          <p data-aos="fade-left">{props.text}</p>
        </div>
      )}
      {props.i === "2" && (
        <div className="about">
          <p data-aos="fade-right">{props.text}</p>
          <img src={props.img} alt="" srcset="" data-aos="fade-left" />
        </div>
      )}
    </Container>
  );
}
