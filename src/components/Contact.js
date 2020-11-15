import React from "react";
import { Row, Col } from "react-bootstrap";

function Contact() {
    return (
        <div className="darkbg">
            <Row>
                <Col className="contact" id="contact">
                    <h2>Let's Connect</h2>
                    <p><a href="mailto:rosajen27@gmail.com"> Rosajen27@gmail.com </a> |
                        <a href="https://www.linkedin.com/in/rosajen27/"> LinkedIn </a> |
                        <a href="https://github.com/rosajen27"> GitHub </a>
                        <br></br>
                        or you may fill out the form below:</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <form action="mailto:rosajen27@gmail.com" method="post" enctype="text/plain">
                        <label for="Name"></label>
                        <input pattern="[A-Z,a-z, ]*" type="text" name="name" id="Name" placeholder="Name"></input>
                        <br></br>

                        <label for="Email"></label>
                        <br></br>
                        <input type="text" name="mail" id="Email" placeholder="Email"></input>
                        <br></br>

                        <label for="Message"></label>
                        <br></br>
                        <textarea rows="5" name="message" placeholder="Message"></textarea>
                        <br></br><br></br>

                        <p><button type="submit" className="btn btn-info">Submit</button></p>
                        <br></br><br></br>
                    </form>
                </Col>
            </Row>
        </div>

    );
}

export default Contact;