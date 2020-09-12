import React from 'react';
import Header from "./components/Header"
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
      <Header />
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
