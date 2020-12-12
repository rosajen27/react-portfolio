import React from "react";
import "react-bootstrap";
import { Row, Col } from "react-bootstrap";


function Home() {
    return (
        <Row>
            <Col>
                <main class="home-container">
                    <div id="home" className="col-12 mx-auto container-fluid">
                        <h1 className="home-title animation">Jennifer Rosa</h1>
                        <h2 className="animation">Full-Stack Web Developer</h2>
                    </div>
                </main>
            </Col>
        </Row>
    );
}
export default Home;