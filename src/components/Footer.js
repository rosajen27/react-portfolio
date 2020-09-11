import React from "react";

function Footer() {

    const currentYear = new Date().getFullYear();

    return <footer>
    <p>
        Copyright © Jennifer Rosa {currentYear}
    </p>
    </footer>
}

export default Footer;