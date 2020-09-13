import React from "react";
import Project from "./Project"

function Projects() {
    return (
        <div className="lightbg">
            <div className="projects">
                <h2>Projects</h2>
                <p className="projectsdescription">Here's a selection of some recent work.</p>
                <p>For more up to the minute work you may visit my <a href="https://github.com/rosajen27"><strong>GitHub</strong></a> or <a href="#"><strong>Portfolio</strong></a>.</p>
                <Project />
            </div>
        </div>
    );
}

export default Projects;