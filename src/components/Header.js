import React from "react";
import { Nav } from "react-bootstrap";

function Header() {
  return (
    <Nav className="navbar">
      <ul className="nav">
        <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
        <li className="nav-item"><a className="nav-link" href="#portfolio">Projects</a></li>
        <li className="nav-item"><a className="nav-link" href="https://rosajen27.github.io/assets/WebDevResume.pdf">Resume</a></li>
        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
      </ul>
      </Nav>
  );
}

export default Header;