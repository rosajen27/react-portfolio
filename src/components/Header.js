import React from "react";

function Header() {
  return (
    <div id="navigation">
    <ul className="nav justify-content-end">
      <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
      <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
      <li className="nav-item"><a className="nav-link" href="#portfolio">Projects</a></li>
      <li className="nav-item"><a className="nav-link" href="https://rosajen27.github.io/public/JENROSA.pdf" target="_blank">Resume</a></li>
      <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
    </ul>
    </div>
  );
}

export default Header;
