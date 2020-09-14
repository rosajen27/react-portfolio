import React from "react";
import { Row, Col } from "react-bootstrap";

function Technologies() {
    return (
        <div className="darkbg technologies" id="technologies">
            <Col>
                <h2>Technologies</h2>
            </Col>

            <Row>
                <Col>
                    <img className="technologies-icon" src="https://raw.githubusercontent.com/rosajen27/react-portfolio/ff768ce7434ecb8848eb7cf123f0dd8f110f0127/public/icons/html.svg" alt="html"></img>
                    <img className="technologies-icon" src="https://raw.githubusercontent.com/rosajen27/react-portfolio/ff768ce7434ecb8848eb7cf123f0dd8f110f0127/public/icons/css.svg" alt="css"></img>
                    <img className="technologies-icon" src="https://raw.githubusercontent.com/rosajen27/react-portfolio/4fa814d804ea6d912772bfc325bb4c01b0f81f28/public/icons/javascript.svg" alt="javascript"></img>
                    <img className="technologies-icon" src="https://raw.githubusercontent.com/rosajen27/react-portfolio/facff5ae1d5f7b82d412f5431cf43acf57740516/public/icons/jquery.svg" alt="jquery"></img>
                </Col>
            </Row>
            
            <Row>
                <Col>
                    <img className="technologies-icon" src="https://raw.githubusercontent.com/rosajen27/react-portfolio/ff768ce7434ecb8848eb7cf123f0dd8f110f0127/public/icons/nodejs.svg" alt="node-and-express"></img>
                    <img className="technologies-icon" src="https://raw.githubusercontent.com/rosajen27/react-portfolio/ff768ce7434ecb8848eb7cf123f0dd8f110f0127/public/icons/react.svg" alt="react"></img>
                    <img className="technologies-icon" src="https://github.com/rosajen27/react-portfolio/blob/master/public/icons/mongodb.png?raw=true" alt="mongo-db"></img>
                </Col>
            </Row>
        </div>
    );
}

export default Technologies;