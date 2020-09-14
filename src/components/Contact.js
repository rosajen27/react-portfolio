import React from "react";
import { Row, Col } from "react-bootstrap";

function Contact() {
    return (
        <Row className="darkbg">
            <Col className="contact" id="contact">
                <h2>Contact</h2>
                <p>Contact me via <a href="mailto:rosajen27@gmail.com">email</a> or fill out the form below:</p>
                <br></br>


                <form action="mailto:rosajen27@gmail.com" method="post" enctype="text/plain">
                    <label for="Name"></label>
                    <br></br>
                    <input pattern="[A-Z,a-z, ]*" type="text" name="name" id="Name" placeholder="Name"></input>
                    <br></br>

                    <label for="Email"></label>
                    <br></br>
                    <input type="text" name="mail" id="Email" placeholder="Email"></input>
                    <br></br><br></br>

                    <label for="Message"></label>
                    <br></br>
                    <textarea rows="5" name="message" placeholder="Message"></textarea>
                    <br></br><br></br>

                    <p><button type="submit">Submit</button></p>
                </form>
            </Col>
        </Row>

    );
}

export default Contact;