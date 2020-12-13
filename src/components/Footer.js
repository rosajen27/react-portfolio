import React from "react";
import { Row, Col } from "react-bootstrap";

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <div className="bg container-fluid" id="footer">
            <Row>
                <Col className="col-12">
                    <a href="#navigation">Back to Top</a>
                    <br></br><br></br>
                    <a href="https://github.com/rosajen27"><img className="social-icons" alt="github" src="https://raw.githubusercontent.com/rosajen27/rosajen27.github.io/a18b2f9f39f425ff29cc3ad7e5c45442b542dc34/public/icons/github.svg"></img></a>
                    <a href="https://linkedin.com/in/rosajen27"><img className="social-icons" alt="linkedin" src="https://raw.githubusercontent.com/rosajen27/rosajen27.github.io/a18b2f9f39f425ff29cc3ad7e5c45442b542dc34/public/icons/linkedin.svg"></img></a>
                    <br></br><br></br>
                    <p>© Copyright Jennifer Rosa {currentYear}</p>

                </Col>
            </Row>
        </div>
    );
}

export default Footer;