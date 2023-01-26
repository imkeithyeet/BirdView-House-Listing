import NewHome from "./NewHome"
import '../styles/dashboard.css';
import React, { useState } from "react";

function Dashboard({ user, setUser }) {
    const [isLoading, setIsLoading] = useState(true);
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
                <li>{home.address}</li>
                </div>
            ))}
            </div>
        <h2 className="H2"style={{color: "DarkSlateGray"}} >Sell your Home: </h2>
        <NewHome user={user} setUser={setUser} />
        </>
    );
}

export default Dashboard;