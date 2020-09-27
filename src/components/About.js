import React from "react";
import { Row, Col } from "react-bootstrap";


function About() {
    return (
            <Row className="lightbg container-fluid" id="about">
                <Col className="mx-auto">
                    <p className="aboutdescription">
                        <h2>Hello, World!</h2>
                        <br />
                        My name is Jennifer Rosa. I am currently a 5th grade classroom teacher, based in Connecticut, who is transitioning out of the classroom and into the world of web development. When I am not teaching my lovely students, I am passionately creating dynamic and beautiful web pages as an ambitious and aspiring Front-End Developer.
                        <br /><br />
                        One of my dreams is to one day combine my teaching background and experience with my coding skills in order to support the development of computational thinking in young people. When I'm not online, I enjoy spending time outdoors, playing video games, powerlifting, and watching an irresponsible amount of Netflix.
                    </p>
                </Col>
                <Col className="mx-auto container-fluid">
                    <img className="profile-img" src="https://github.com/rosajen27/react-portfolio/blob/master/public/images/mountain-profile3.png?raw=true" alt="profile-img" />
                </Col>
            </Row>
    );
}

export default About;
