import React from "react";
import Container from "react-bootstrap/esm/Container";

export default function About(props) {
  return (
    <Container>
      {props.i === "1" && (
        <div className="about">
          <img src={props.img} alt="" srcset="" />
          <p>{props.text}</p>
        </div>
      )}
      {props.i === "2" && (
        <div className="about">
        <p>{props.text}</p>
          <img src={props.img} alt="" srcset="" />
        </div>
      )}
    </Container>
  );
}
