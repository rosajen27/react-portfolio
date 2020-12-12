import React from "react";

function Navigation() {
  return (
    <div id="navigation">
<ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" href="#home">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#about">About</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#projects">Projects</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#contact">Contact</a>
  </li>
</ul>
    </div>
  );
}

export default Navigation;