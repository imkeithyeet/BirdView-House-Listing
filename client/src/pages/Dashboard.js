import NewHome from "./NewHome"
import '../styles/dashboard.css';
import React, { useState, useEffect } from "react";

function Dashboard({ user, setUser }) {
    const [showEmail, setShowEmail] = useState({});

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
        <h1 className="H1"style={{color: "DarkSlateGray"}} >Homes for Sale: </h1>
            <div>
            {user.homes && user.homes.map((home) => (
            <div>
                    <img
                    src={home.photos && home.photos[0].image_url}
                    alt={home.bio}
                    className="dashListings"
                    />
                <h3>{home.address}</h3>
                {user && home.offers && home.offers.map((offer, index) => {
                    return (
                        <div>Offers:
                            <li>${numberWithCommas(offer.amount)}</li>
                            <li>Offered By: {offer.user? offer.user.username : 'Not found'}</li>
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