import React from "react";
import { Row, Col } from "react-bootstrap";


function About() {
    return (
            <Row className="lightbg container-fluid" id="about">
                <Col className="mx-auto col-12 col-md-12 col-lg-6">
                    <p className="aboutdescription">
                        <h2>Hello, World!</h2>
                        <br />
                        I'm Jen, an elementary school teacher, based in Connecticut, who is transitioning out of the classroom and into the world of Web Development.
                        When I am not teaching my lovely students, I am passionately creating dynamic and beautiful web pages and web apps.
                        Through self-study and enrolling in a coding Bootcamp at the University of Connecticut, I am building a solid foundation in both frontend and backend technologies and languages.
                        When I'm not online, I enjoy spending time outdoors, playing video games, powerlifting, and watching an irresponsible amount of Netflix.
                    </p>
                </Col>
                <Col className="mx-auto container-fluid col-12 col-md-12 col-lg-6">
                    <img className="profile-img responsive" src="https://github.com/rosajen27/react-portfolio/blob/master/public/images/mountain-profile3.png?raw=true" alt="profile-img" />
                </Col>
            </Row>
    );
}

export default About;
