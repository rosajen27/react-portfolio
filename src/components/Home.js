import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
    return (
    <div className="home">
    <div className="divinsidehome">
    <h1 className="hometitle">Jennifer Rosa</h1>
    <h2 className="hometitledescription">Web Developer</h2>
    </div>
    <p className="scrolldown"><a href="#about"><FontAwesomeIcon className="chevron-circle-down" icon="chevron-circle-down" size="3x" /></a></p>
    </div>
    );
}
export default Home;