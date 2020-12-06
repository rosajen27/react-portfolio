import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "react-bootstrap";
import { Row, Col } from "react-bootstrap";


function Home() {
    return (

        <div id="home" className="col-12 mx-auto container-fluid">
            <Row>
                <Col>
                    <h1 className="home-title animation">Jennifer Rosa</h1>
                    <h2 className="animation">Full-Stack Web Developer</h2>
                    <br></br><br></br><br></br><br></br><br></br><br></br>
                    <p className="down-arrow animation"><a href="#about"><FontAwesomeIcon className="chevron-circle-down" icon="chevron-circle-down" size="2x" /></a></p>
                </Col>
            </Row>
        </div>
    );
}
export default Home;