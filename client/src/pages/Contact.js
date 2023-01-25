import React from "react";
import '../styles/contact.css';

function Contact() {

    return (
            <body className="new" >
                <h1 className="H1"style={{color: "CadetBlue"}}>Contact Us</h1>
                <p1 className="P1" style={{color: "black", padding:"20px"}}>Send Us a Message Today:</p1>
                <p3 className= "P3"> By submitting your message and personal details you are permitting us to contact you by these means in response to your inquiry. </p3>
                <form style={{color: "black"}}>

                    <label>Name:</label>
                    <input  placeholder="Name..." type="text" name="name" />
                    <label>email</label>
                    <input placeholder="Email" type="text" name="email" />
                    <label>Message</label>
                    <input placeholder="Message" type="text" name="message" />
                    <div className="Submit">
                    <button  type="submit">Send Message</button>
                    </div>
                </form>
            </body>
    )
}

export default Contact;