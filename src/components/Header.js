import React from "react";

function Header() {
  return <header>
    <nav>
      <ul id="nav" className="nav">
        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
        <li><a className="smoothscroll" href="#about">About</a></li>
        <li><a className="smoothscroll" href="#resume">Resume</a></li>
        <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
        <li><a className="smoothscroll" href="#contact">Contact</a></li>
      </ul>
    </nav>

  </header>
}

export default Header;