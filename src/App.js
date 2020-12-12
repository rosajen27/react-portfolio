import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./components/Navigation"
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Technologies from './components/Technologies';
import Contact from "./components/Contact";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronCircleDown);


function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )

}

export default App;
