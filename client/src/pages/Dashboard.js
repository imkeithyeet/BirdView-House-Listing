import NewHome from "./NewHome";
import "../styles/dashboard.css";
import "../styles/DarkMode.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Dashboard({ user, setUser }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

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
        <h1 className="H1">Homes for Sale: </h1>
        <div>
            {user &&
            user.homes &&
            user.homes.map((home) => (
                <div className="homesForSale">
                <Link to={`/listing?id=${home.id}`}>
                    <h3>{home.address}</h3>
                </Link>
                <h2>
                    {`You have `}
                    <Link to={`/listing?id=${home.id}`}>{home.offers.length}</Link>
                    {home.offers.length === 1
                    ? " offer on this home"
                    : " offers on this home"}
                </h2>
                <img
                    className="dashListings"
                    src={
                    (home.photos?.length > 0 && home.photos[0].image_url) ||
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
                    }
                    alt={home.bio}
                />
                </div>
            ))}
        </div>
        <h2 className="H2" style={{ color: "DarkSlateGray" }}>
            Sell your Home:{" "}
        </h2>
        <NewHome user={user} setUser={setUser} />
        </>
    );
}

export default Dashboard;
