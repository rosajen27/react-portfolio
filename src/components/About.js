import React from "react";
import { Row, Col } from "react-bootstrap";


function About() {
    return (
        <Row className="lightbg container-fluid" id="about">
            <Col className="mx-auto">
                <p className="aboutdescription">
                    <h2>Hello, World!</h2>
                    <br />
                    <p>I'm Jen, an elementary school teacher, based in <strong>Connecticut</strong>, who is transitioning out of the
          classroom and into the world of Web Development.</p>
                    <p>When I am not teaching my lovely students, I am passionately creating dynamic and beautiful web pages and web
          apps.</p>
                    <p>Through self-study and enrolling in a coding Bootcamp at the <strong>University of Connecticut</strong>, I am
          building a solid foundation in both frontend and backend technologies and languages.</p>
                    <p>When I'm not online, I enjoy spending time outdoors, playing video games, powerlifting, and watching an
          irresponsible amount of Netflix.</p>
                </Col>
                <Col className="mx-auto container-fluid">
                    <img className="profile-img" src="https://github.com/rosajen27/react-portfolio/blob/master/public/images/mountain-profile3.png?raw=true" alt="profile-img" />
                </Col>
            </Row>
    );
}

export default About;
