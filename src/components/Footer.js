import React from "react";
import Socialmedia from "./Socialmedia";

function Footer() {

    const currentYear = new Date().getFullYear();

    return <footer>
    <Socialmedia />
    <p>
        Copyright © Jennifer Rosa {currentYear}
    </p>
    </footer>
}

export default Footer;