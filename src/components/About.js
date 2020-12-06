import React from "react";
import { Row, Col } from "react-bootstrap";


function About() {
    return (
        <div className="light bg container-fluid" id="about">
            <Row>
                <Col className="container-fluid col-12 col-md-12 col-lg-6">
                <br></br><br></br>
                <h2>Hello, World!</h2>
                <br></br>
                    <p className="aboutdescription">
                        I'm <b>Jen</b>, an elementary school teacher, based in <b>Connecticut</b>, who is transitioning out of the classroom and into the world of Web Development.
                        <br></br><br></br><br></br>
                        When I am not teaching my lovely students, I am passionately creating dynamic and beautiful web pages and web apps.
                        <br></br><br></br><br></br>
                        Through self-study and enrolling in a coding Bootcamp at the <b>University of Connecticut</b>, I am building a solid foundation in both frontend and backend technologies and languages.
                        <br></br><br></br><br></br>
                        When I'm not online, I enjoy spending time outdoors, playing video games, powerlifting, and watching an irresponsible amount of Netflix.
                    </p>
                </Col>

                <Col className="container-fluid col-12 col-md-12 col-lg-6">
                    <img className="profile-img responsive" src="https://github.com/rosajen27/react-portfolio/blob/master/public/images/mountain-profile3.png?raw=true" alt="profile-img" />
                </Col>
            </Row>
        </div>
    );
}

export default About;
