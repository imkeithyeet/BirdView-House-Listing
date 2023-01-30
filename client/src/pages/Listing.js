import { useEffect, useState } from "react";
import "../styles/Listing.css";
import { Error, FormField, Button, Label, Input } from "../styles";
import { useHistory } from "react-router-dom";
import ListingCarousel from "../components/ListingCarousel.js";
import { Link } from "react-router-dom";

function Listing({ user, onOffer }) {
  const [home, setHome] = useState([]);
  const [amount, setAmount] = useState("");
  const id = new URLSearchParams(window.location.search).get("id");
  const [formVisible, setFormVisible] = useState(false);
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    fetch(`/homes/${id}`)
      .then((r) => r.json())
      .then(setHome);
  }, []);

  function handleCreateOffer(event) {
    event.preventDefault();
    fetch(`/homes/${id}/offers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ amount }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onOffer(user));
        history.push("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function handleCreateHomewatch() {
    fetch(`/homewatches`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ home_id: home.id, user_id: user.id }),
    })
      .then((r) => r.json())
      .then(console.log);
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  if (!user)
    return (
      <div className="listingContainer">
        <h1>{home && home.address}</h1>
        <img
          className="ListingPic"
          src={
            (home.photos?.length > 0 && home.photos[0].image_url) ||
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
          }
        />
        <p>{home && home.bio}</p>
        <h2>
          Asking Price: ${home && home.price && numberWithCommas(home.price)}
        </h2>
        <h1>
          Being sold by:{" "}
          {home.user && capitalizeFirstLetter(home.user.username)}
        </h1>
        <h3>Gallery:</h3>
        <ListingCarousel home={home} />
      </div>
    );

  return (
    <div className="listingContainer">
      <h1 className="titlePlusButton">{home && home.address}</h1>
      <div className="listingCont2">
        <img
          className="ListingPic"
          src={
            (home.photos?.length > 0 && home.photos[0].image_url) ||
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
          }
        />
      </div>
      <p>{home && home.bio}</p>
      <h2>
        Asking Price: ${home && home.price && numberWithCommas(home.price)}
      </h2>
      <h1>
        Being sold by: {home.user && capitalizeFirstLetter(home.user.username)}
      </h1>
      <ul></ul>
      <div className="buttons">
        <Button
          className="offer-button"
          variant="outline"
          onClick={() => setFormVisible(!formVisible)}
        >
          {formVisible ? "Cancel" : "Place an Offer"}
        </Button>
        <Button
          as={Link}
          to="/"
          variant="outline"
          onClick={() => {
            handleCreateHomewatch();
          }}
          className="watchButton"
        >
          Add to Homewatch
        </Button>
      </div>
      <ul></ul>
      {formVisible && (
        <>
          <form onSubmit={(event) => handleCreateOffer(event)}>
            <input
              type="text"
              value={amount}
              placeholder="amount..."
              onChange={(e) => setAmount(e.target.value)}
            />
            <Button variant="outline" type="submit" onClick={onOffer}>
              Submit
            </Button>
            <FormField>
              {errors.map((err) => (
                <Error key={err}>{err}</Error>
              ))}
            </FormField>
          </form>
          <ul></ul>
        </>
      )}
      <h3>Gallery:</h3>
      <ListingCarousel home={home} />
    </div>
  );
}

export default Listing;
