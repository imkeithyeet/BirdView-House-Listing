import { useEffect, useState } from "react";
import '../styles/about.css';
import "../styles/DarkMode.css";


function About() {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      } else {
      setTheme('light');
      }
      };
      useEffect(() => {
        document.body.className = theme;
          }, [theme]);
      
    return(
        <wrapper>
        <div className="about">
            <h5 className="H5">Our Mission</h5>
            <img className="Img"src={"https://media.istockphoto.com/id/1269761486/photo/happy-family-playing-funny-game-having-fun-together.jpg?s=612x612&w=0&k=20&c=HsXiMFjUQ3kk22RrT9n9LrMu8-3NAMClFa9pRWaGj6U="} alt="family" />
            <p1  className="p1">We are on a mission to help customers sell their potential house and list them onto our website for ease of mind and take care of the headache of home selling with just a click of a button. </p1>
            <button  className="LoggedInDark"onClick={toggleTheme}>🔆/🌙</button>
        </div>
        </wrapper>
    )
    }

export default About