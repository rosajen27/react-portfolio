import React from "react";
import { Row, Col } from "react-bootstrap";

function Technologies() {
    return (
        <div className="dark bg technologies container-fluid" id="technologies">
            <Row>
                <Col className="col-12">
                    <h2>Technologies</h2>
                </Col>
            </Row>

            <Row>
                <Col className="col-sm-12">
                    <img className="technologies-icon" src="https://rosajen27.github.io/public/icons/html.svg" alt="html"></img>
                    <img className="technologies-icon" src="https://rosajen27.github.io/public/icons/css.svg" alt="css"></img>
                    <img className="technologies-icon" src="https://rosajen27.github.io/public/icons/javascript.svg" alt="javascript"></img>
                    <br></br>
                    <img className="technologies-icon" src="https://rosajen27.github.io/public/icons/mongodb.png" alt="mongo-db"></img>
                    <img className="technologies-icon" src="https://rosajen27.github.io/public/icons/react.svg" alt="react"></img>
                    <img className="technologies-icon" src="https://rosajen27.github.io/public/icons/nodejs.svg" alt="node-and-express"></img>
                    <br></br><br></br>
                </Col>
            </Row>
        </div>
    );
}

export default Technologies;