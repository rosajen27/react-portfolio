import React from "react";

function Header() {
  return (
    <div className="navbar">
      <ul id="nav" className="nav">
        <li><a href="#contact">Contact</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#home">Home</a></li>
      </ul>
    </div>
  );
}

export default Header;