import React from "react";
import '../styles/about.css';
import "../styles/DarkMode.css";


function About() {

    return(
        <div>
            <div className="about">
                <h5 className="H5">Our Mission</h5>
                    <img className="Img"src={"https://media.istockphoto.com/id/1269761486/photo/happy-family-playing-funny-game-having-fun-together.jpg?s=612x612&w=0&k=20&c=HsXiMFjUQ3kk22RrT9n9LrMu8-3NAMClFa9pRWaGj6U="} alt="family" />
                <p  className="p1">We are on a mission to help customers sell their potential house and list them onto our website for ease of mind and take care of the headache of home selling with just a click of a button. </p>
            </div>
        </div>
    )
    }

export default About