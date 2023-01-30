import NewHome from "./NewHome"
import '../styles/dashboard.css';
import "../styles/DarkMode.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Dashboard({ user, setUser }) {
    const [showEmail, setShowEmail] = useState({});
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
      
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        if (user) {
            fetch("/users/" + user.id)
                .then((res) => res.json())
                .then((data) => {
                    setUser(data);
                });
        }
    },[]);

    return (
        <>
        <h1 className="H1" >Homes for Sale: </h1>
        <button  className="Toggle"onClick={toggleTheme}>🔆/🌙</button>
            <div>
            {user && user.homes && user.homes.map((home) => (
            <div className="homesForSale" >
                <Link to={`/user?id=${home.id}`}>
                    <h3>{home.address}</h3>
                </Link>
                    <img
                    className="dashListings"
                    src={home.photos?.length > 0 && home.photos[0].image_url}
                    alt={home.bio}
                    />
                {user && home.offers && home.offers.map((offer, index) => {
                    return (
                        <div className="offers">Offers:
                            <li>${numberWithCommas(offer.amount)}</li>
                            <li>Offered By: {offer.user? capitalizeFirstLetter(offer.user.username) : 'Not found'}</li>
                            <button onClick={()=>setShowEmail({...showEmail, [index]: !showEmail[index]})}>Respond</button>
                            {showEmail[index] ? <div>{offer.user.email}</div> : ""}
                        </div>
                    )
                })}
                </div>
            ))}
            </div>
        <h2 className="H2"style={{color: "DarkSlateGray"}} >Sell your Home: </h2>
        <NewHome user={user} setUser={setUser} />
        </>
    );
}

export default Dashboard;