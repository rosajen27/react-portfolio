import React from "react";
import Card from "./Card"
import { Row, Col } from "react-bootstrap";
import works from "../works";

function createCard(projectDetails) {
    return <Card
        key={projectDetails.id}
        projecttitle={projectDetails.projecttitle}
        projecttech={projectDetails.projecttech}
        projectdescription={projectDetails.projectdescription}
        projectimg={projectDetails.projectimg}
        deployedlink={projectDetails.deployedlink}
        repolink={projectDetails.repolink}
    />
}

function Projects() {
    return (
        <div className="bg container-fluid" id="projects">
            <Row>
                <Col className="col-12">
                    <h2>Projects</h2>
                    <p className="projectsdescription">Here's a selection of some recent work.</p>
                    <p>For more up to the minute work you may visit my <a href="https://github.com/rosajen27"><strong>GitHub</strong></a>.</p>
                </Col>
            </Row>
            <Row className="card-row">
                {works.map(createCard)}
            </Row>
        </div>
    );
}

export default Projects;