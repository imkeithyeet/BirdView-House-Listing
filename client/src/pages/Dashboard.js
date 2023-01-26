import NewHome from "./NewHome"
import '../styles/dashboard.css';
import React, { useState, useEffect } from "react";

function Dashboard({ user, setUser }) {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (!user) {
            // make API call to fetch user data
            fetch("/users/" + user.id)
                .then((res) => res.json())
                .then((data) => {
                    setUser(data);
                    setIsLoading(false);
                });
        }
    }, []);
    return (
        <>
        <h1 className="H1"style={{color: "DarkSlateGray"}} >Homes for Sale: </h1>
            <div>
            {user.homes.map((home) => (
            <div>
                {isLoading && <div>Loading..</div>}
                    <img
                    src={home.photos && home.photos.map((photo) => photo.image_url)}
                    alt={home.bio}
                    className="dashListings"
                    onLoad={() => setIsLoading(false)}
                    />
                <h3>{home.address}</h3>
                {home.offers && home.offers.map((offer) => {
                    return (
                        <div>Offers:
                            <li>${offer.amount}</li>
                            <li>Offered By: {offer.user && offer.user.username}</li>
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