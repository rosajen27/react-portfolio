import React from "react";

import Socialmedia from "./Socialmedia"

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <div>
            <footer>
            <a href="#home">Back to Top</a>
            <br></br><br></br>
                <Socialmedia />
                <br></br>
                <p>
                © Copyright Jennifer Rosa {currentYear}
                </p>
            </footer>
        </div>
    );
}

export default Footer;