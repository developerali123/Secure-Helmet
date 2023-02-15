import React from 'react';
import img from "../images/secure logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button';

export default function SecureNavbar(props) {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={img} alt="" srcset="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        {props.name === "home" && (
          <Nav className="ms-auto">
            <Nav.Link href="#home"><h4>Home</h4></Nav.Link>
            <Nav.Link href="#link" className='red'><h4>Career</h4></Nav.Link>
            <Nav.Link href="#link" className='red'><h4>About</h4></Nav.Link>
            <Nav.Link href="#link" className='red'><h4>Contact</h4></Nav.Link>
            <Nav.Link href="#link" className='red'><h4>Testinominal</h4></Nav.Link>
            <Nav.Link href="#link" className='red'><h4>FAQ</h4></Nav.Link>
            <Button variant="outline-primary" className="me-3 buttons">Login</Button>
            <Button variant="outline-primary" className="buttons">Signup</Button>
          </Nav>
        )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
