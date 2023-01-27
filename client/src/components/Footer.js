import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            {`Copyright © BirdView ${year}`}
            <div>
                <p className="A"> All rights reserved. Updated January 2023: By searching, you agree to the Terms of Use, and Privacy Policy. </p>
                <br />
                <p className="p2"></p>
                <br />
            </div>
            <div className="footer">
            </div>
        </footer>
    );
};

export default Footer;

