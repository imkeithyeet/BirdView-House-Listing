import { useEffect, useState } from "react";
import "../styles/Listing.css"
import { Error, FormField, Label, Textarea } from "../styles";
import { useHistory } from "react-router-dom";
import ListingCarousel from "../components/ListingCarousel.js"

function Listing({ user, onOffer }) {
    const [home, setHome] = useState([]);
    const [amount, setAmount] = useState("");
    const id = new URLSearchParams(window.location.search).get('id')
    const [formVisible, setFormVisible] = useState(false);
    const [errors, setErrors] = useState([]);
    const history = useHistory();

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
                "Accept": "application/json"
            },
            body: JSON.stringify({ amount })
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((user) => onOffer(user));
                history.push('/');
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
  
    if (!user) return (
        <>
            <img className="ListingPic" src={home && home.photos && home.photos[0].image_url} />
                <div>{home && home.address}</div>
            <h1>Being sold by: {home.user && home.user.username}</h1>
            <ListingCarousel home={home} />
        </>
    )

  return (
    <>
      <img
        className="ListingPic"
        src={
          home.photos && home.photos.map((photo) => photo && photo.image_url)
        }
      />
      <div>{home && home.address}</div>
      <h1>Being sold by: {home.user && home.user.username.toUpperCase()}</h1>
      <ListingCarousel home={home} />
      <button onClick={() => setFormVisible(!formVisible)}>
        {formVisible ? "Cancel" : "Place an Offer"}
      </button>
      <button
        onClick={() => {
          handleCreateHomewatch();
        }}
      >
        ❤️
      </button>
      {formVisible && (
            <form onSubmit={event => handleCreateOffer(event)}>
                <input type="text" value={amount} placeholder="amount..." onChange={e => setAmount(e.target.value)} />
                <button type="submit" onClick={onOffer} >Submit</button>
                <FormField>
                    {errors.map((err) => (
                        <Error key={err}>{err}</Error>
                    ))}
                </FormField>
            </form>
        )}
    </>
  );
}

export default Listing;
