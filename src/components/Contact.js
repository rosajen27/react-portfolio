import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


function Contact() {
    return (
        <div className="container-fluid dark bg" id="contact">
            <Row>
                <Col className="col-12">
                <br></br><br></br><br></br><br></br>
                    <h2>Let's Connect</h2>
                    <p>Feel free to reach out if you have questions, think we could work together, or simply would like to connect!</p>
                    <br></br>
                    <form action="mailto:rosajen27@gmail.com">
                    <button type="submit" class="btn btn-info btn-lg" ><FontAwesomeIcon alt="email" icon={faEnvelope} /> <b>rosajen27@gmail.com</b></button>
                    </form>
                </Col>
            </Row>
        </div>

    );
}

export default Contact;