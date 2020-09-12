import React from "react";

import Socialmedia from "./Socialmedia"

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <div>
            <footer>
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