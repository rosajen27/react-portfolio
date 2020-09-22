import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "react-bootstrap";

function Home() {
    return (

    <div id="home">
    <h1 className="hometitle">Jennifer Rosa</h1>
    <h2 className="hometitledescription">Web Developer</h2>
    <br></br><br></br><br></br>
    <p className="scrolldown"><a href="#about"><FontAwesomeIcon className="chevron-circle-down" icon="chevron-circle-down" size="3x" /></a></p>
    </div>
    );
}
export default Home;