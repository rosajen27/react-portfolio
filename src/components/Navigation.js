import React from "react";

function Navigation() {
  return (
    <nav id="navigation">
<ul className="nav justify-content-end">
  <li className="nav-item">
    <a className="nav-link active" href="#home">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#about">About</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#projects">Projects</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#contact">Contact</a>
  </li>
</ul>
    </nav>
  );
}

export default Navigation;