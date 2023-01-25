import React from "react";

function Contact() {

    return (
            <body className="new" >
                <h1 className="H1"style={{color: "#FFA52C"}}>Contact Us</h1>
                <p1 className="P1" style={{color: "#c2f6fa"}}>Find us at some address at some place or call us at some number</p1>
                <p1 className="P1" style={{color: "#c2f6fa", padding:"20px"}}>Reserve a table, ask for today's special, or just send us a message:</p1>
                <form style={{color: "black"}}>
                    <label>Name:</label>
                    <input  placeholder="Name..." type="text" name="name" />
                    <label># of Guest</label>
                    <input placeholder="# of Guest" type="text" name="how many people" />
                    <label>Date</label>
                    <input placeholder="Date" type="date" name="date" />
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