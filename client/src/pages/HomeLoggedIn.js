import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button, FormField, Error } from "../styles";
import "../styles/HomeLoggedIn.css";
import "../styles/DarkMode.css";

function HomeLoggedIn({ user, setUser }) {
  const [homes, setHomes] = useState([]);
  const [amount, setAmount] = useState("");
  const [errors, setErrors] = useState([]);
  const [showForm, setShowForm] = useState({});
  const [homewatches, setHomewatches] = useState([]);
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

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleEdit = (offerId) => {
    fetch(`/offers/${offerId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));
  };

  const handleDelete = (offerId) => {
    fetch(`/offers/${offerId}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setUser((prevState) => {
            return {
              ...prevState,
              offers: prevState.offers.filter((offer) => offer.id !== offerId),
            };
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetch("/homes")
      .then((r) => r.json())
      .then(setHomes);
  }, [user]);

  useEffect(() => {
    fetch("/homewatches")
      .then((r) => r.json())
      .then(setHomewatches);
  }, [user]);

  function handleDeleteHomewatch(id) {
    fetch(`/homewatches/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          const updatedWatches = homewatches.filter(
            (homewatch) => homewatch.id !== id
          );
          setHomewatches(updatedWatches);
        } else {
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Wrapper>
      {user && (
        <div>
          <div className="HomeLoggedcontainer">
            <img
              className="HomeLogggedInImg"
              src="../images/HomeLoggedInPic.jpg"
            />
            <h1 className="centered">
              Welcome, {capitalizeFirstLetter(user.username)}
            </h1>
          </div>
          <h2 className="O">Offers you have made: </h2>
          {user && user.offers && user.offers.length ? (
            user.offers.map((offer, index) => {
              return (
                <div key={offer.id}>
                  <h3>{offer.home_address}</h3>
                  <h4>Asking: ${numberWithCommas(offer.home.price)}</h4>
                  <h4>Your offer: ${numberWithCommas(offer.amount)}</h4>
                  <Button
                    variant="outline"
                    onClick={() =>
                      setShowForm({ ...showForm, [index]: !showForm[index] })
                    }
                  >
                    {showForm[index] ? "Cancel" : "Edit Offer"}
                  </Button>
                  {showForm[index] && (
                    <form>
                      <input
                        type="text"
                        value={amount}
                        onChange={handleChange}
                      />
                      <Button
                        variant="outline"
                        onClick={() => handleEdit(offer.id)}
                      >
                        Edit Offer
                      </Button>
                      <FormField>
                        {errors.map((err) => (
                          <Error key={err}>{err}</Error>
                        ))}
                      </FormField>
                    </form>
                  )}
                  <Button
                    variant="outline"
                    onClick={() => handleDelete(offer.id)}
                  >
                    Delete offer
                  </Button>
                </div>
              );
            })
          ) : (
            <p>You have no offers</p>
          )}
          <h2>
            {`You have `}
            <Link to="/dashboard">{user.offer_count}</Link>
            {user.offer_count === 1
              ? " offer on your Listings"
              : " offers on your Listings"}
          </h2>
          <h2>Your Watchlist:</h2>
          <Wrapper className="homelist-loggedin">
            {homewatches.length > 0
              ? homewatches.map((homewatch) => (
                  <Home key={homewatch.home_id}>
                    <Box>
                      <img
                        src={
                          (homewatch.home.photos?.length > 0 &&
                            homewatch.home.photos[0].image_url) ||
                          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
                        }
                        alt={homewatch.home.bio}
                        className="homeListListings"
                      />
                      <h2>{homewatch.home.address}</h2>
                      <ReactMarkdown>{homewatch.home.bio}</ReactMarkdown>
                      <div className="ListingButton">
                        <div className="remove">
                          <Button
                            variant="outline"
                            as={Link}
                            to={`/homes?id=${homewatch.home.id}`}
                          >
                            View Full Listing
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => handleDeleteHomewatch(homewatch.id)}
                          >
                            Remove From My Watchlist
                          </Button>
                        </div>
                      </div>
                    </Box>
                  </Home>
                ))
              : null}
          </Wrapper>
          <h2>Browse our Catalogue of Homes: </h2>
          <Wrapper className="homelist-loggedin">
            {homes.length > 0 ? (
              homes.map((home) => (
                <Home key={home.id}>
                  <Box>
                    <img
                      src={
                        (home.photos?.length > 0 && home.photos[0].image_url) ||
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
                      }
                      alt={home.bio}
                      className="homeListListings"
                    />
                    <h2>{home.address}</h2>
                    <ul>By {capitalizeFirstLetter(home.user.username)}</ul>
                    <ul className="money">${numberWithCommas(home.price)}</ul>
                    <ReactMarkdown>{home.bio}</ReactMarkdown>
                    <div className="ListingButton">
                      <Button
                        variant="outline"
                        as={Link}
                        to={`/homes?id=${home.id}`}
                      >
                        View Full Listing
                      </Button>
                    </div>
                  </Box>
                </Home>
              ))
            ) : (
              <>
                <h2>No Homes Found</h2>
                <Button as={Link} to="/new">
                  List your Home!
                </Button>
              </>
            )}
          </Wrapper>
        </div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const Home = styled.article`
  margin-bottom: 24px;
`;

export default HomeLoggedIn;
