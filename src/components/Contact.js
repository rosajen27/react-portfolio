import React from "react";

function Contact() {
    return (
        <div className="darkbg">
            <div className="contact">
                <h2>Contact</h2>
                <p>Contact me via <a href="mailto:rosajen27@gmail.com">email</a> or fill out the form below:</p>
                <br></br><br></br>


                <form action="mailto:rosajen27@gmail.com" method="post" enctype="text/plain">
                    <label for="Name">Name</label>
                    <br></br>
                    <input pattern="[A-Z,a-z, ]*" type="text" name="name" id="Name"></input>
                    <br></br><br></br>

                    <label for="Email">Email</label>
                    <br></br>
                    <input type="text" name="mail" id="Email"></input>
                    <br></br><br></br>

                    <label for="Message">Message</label>
                    <br></br>
                    <textarea rows="5" name="message"></textarea>
                    <br></br><br></br>

                    <p><button type="submit">Submit</button></p>
                </form>
            </div>
        </div>

    );
}

export default Contact;