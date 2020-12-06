import React from "react";
import { Row, Col } from "react-bootstrap";


function About() {
    return (
        <div className="bg container-fluid" id="about">
            <Row>
                <Col className="col-12">

                    <h2>About Me</h2>
                    <br></br>
                </Col>
            </Row>
            <Row>
                <Col className="half-col">
                    <p className="aboutdescription">
                        Hello, World! My name is Jennifer Rosa and I am an elementary school teacher, based in Connecticut, who is transitioning out of the classroom and into the world of Web Development.
                        <br></br><br></br>
                        When I am not teaching my lovely students, I am passionately creating dynamic and beautiful web pages and web apps. I build full stack applications using JavaScript, MongoDB, Express, React.js, and Node.js.
                        <br></br><br></br>
                        Through self-study and recently graduating from a coding Bootcamp at the University of Connecticut, I am building a solid foundation in both frontend and backend technologies and languages. My bootcamp experience has also given me the opportunity to work on several teams, doing daily standups and communication using Slack and Zoom, along with utilizing source control software such as GitHub.
                        <br></br><br></br>
                        When I'm not online, I enjoy spending time outdoors, playing video games, powerlifting, and watching an irresponsible amount of Netflix.
                    </p>
                </Col>
                
                <Col className="half-col">
                    <img class="about-img" alt="about-img" src="https://raw.githubusercontent.com/rosajen27/rosajen27.github.io/master/public/images/jennifer-img.png"></img>
                </Col>
            </Row>
        </div>
    );
}

export default About;
