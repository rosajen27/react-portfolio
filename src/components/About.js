import React from "react";

function About() {
    return (
        <div className="lightbg">
            <div className="row">
                <div className="col-6-right">
                    <img className="profile-img" src="https://github.com/rosajen27/react-portfolio/blob/master/public/images/mountain-profile3.png?raw=true" alt="profile-img" />
                </div>
                <div className="col-6-left">
                    <p className="aboutdescription">
                        <h2>Hello, World!</h2>
                        <br />
                        My name is Jennifer Rosa, but most of my friends call me Jen for short. I am currently a K-6 Educator, based in Connecticut, who is transitioning out of the classroom and into the wonderful world of web development. When I am not teaching my lovely students, I am passionately creating dynamic and beautiful web pages as an ambitious Front-End Developer. 
                        <br /><br />
                        One of my dreams is to one day combine my teaching background and experience with my coding skills in order to support the development of computational thinking in young people. When I'm not online, I enjoy spending time outdoors, playing video games, powerlifting, and watching an irresponsible amount of Netflix.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;