import React from "react";
import '../styles/contact.css';

function Contact() {

    return (
            <body className="new" >
                <h1 className="H3"style={{color: "CadetBlue"}}>Contact Us</h1>
                <form className="Form"style={{color: "black"}}>
                <p1 className="P1" style={{color: "black", padding:"20px"}}>Send Us a Message Today:</p1>
                    <label>Name:</label>
                    <input  className="Name" placeholder="Name..." type="text" name="name" />
                    <label>email</label>
                    <input  placeholder="Email" type="text" name="email" />
                    <label>Message</label>
                    <input className="Message" placeholder="Message" type="text" name="message" />
                    <div>
                        <button className="Send" type="submit">Send Message</button>
                    </div>
                </form>
                <p3 className= "P3"> By submitting your message and personal details you are permitting us to contact you by these means in response to your inquiry. </p3>
            </body>
    )
}

export default Contact;