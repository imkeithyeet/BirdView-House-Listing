import NewHome from "./NewHome"
import '../styles/dashboard.css';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Dashboard({ user, setUser }) {
    const [showEmail, setShowEmail] = useState({});

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
    }, []);

    return (
        <>
        <h1 className="H1"style={{color: "DarkSlateGray"}} >Homes for Sale: </h1>
            <div>
            {user && user.homes && user.homes.map((home) => (
            <div className="homesForSale" >
                <Link to={`/user?id=${home.id}`}>
                    <h3>{home.address}</h3>
                </Link>
                    <img
                    src={home.photos?.length > 0 && home.photos[0].image_url}
                    alt={home.bio}
                    className="dashListings"
                    />
                {user && home.offers && home.offers.map((offer, index) => {
                    return (
                        <div>Offers:
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