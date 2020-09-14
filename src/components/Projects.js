import React from "react";
import Card from "./Card"
import { Row, Col } from "react-bootstrap";


function Projects() {
    return (
        <div className="lightbg projects" id="portfolio">
            <Row>
                <Col>
                    <h2>Projects</h2>
                    <p className="projectsdescription">Here's a selection of some recent work.</p>
                    <p>For more up to the minute work you may visit my <a href="https://github.com/rosajen27"><strong>GitHub</strong></a> or <a href="https://github.com/rosajen27"><strong>Portfolio</strong></a>.</p>
                </Col>
            </Row>
            <Card />
        </div>
    );
}

export default Projects;