import React from "react";
import "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'


function Home() {
    return (
        <Row>
            <Col>
                <div class="home-container">
                    <div id="home" className="col-12 mx-auto container-fluid">
                        <h1 className="home-title animation">Jennifer Rosa</h1>
                        <h2 className="animation">Full-Stack Web Developer</h2>
                        <a href="#about" class="home-arrow"><FontAwesomeIcon size="2x" icon={faChevronCircleDown}/></a>
                    </div>
                </div>
            </Col>
        </Row>
    );
}
export default Home;