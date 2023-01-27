import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button, FormField, Error } from "../styles";
import "../styles/HomeLoggedIn.css"

function HomeLoggedIn({ user, setUser }) {
  const [homes, setHomes] = useState([]);
  const [amount, setAmount] = useState('');
  const [formVisible, setFormVisible] = useState(false);
  const [errors, setErrors] = useState([]);
  const [showForm, setShowForm] = useState({});
  const [homewatches, setHomewatches] = useState([]);

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

  const handleEdit = (offerId) => {
    fetch(`/offers/${offerId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => console.error(error));
  };

  const handleDelete = (offerId) => {
    fetch(`/offers/${offerId}`, {
      method: "DELETE"
    })
    .then((res) => {
      if(res.ok){
        setUser((prevState) => {
            return {
              ...prevState,
            offers: prevState.offers.filter((offer) => offer.id !== offerId)
            };
          })
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
          <h1>Welcome, {user.username.toUpperCase()}!</h1>
          <h2 className="O">Offers you have made: </h2>
            {user && user.offers && user.offers.length ? user.offers.map((offer, index) => {
              return (
                <div key={offer.id}>
                  <h3>{offer.home_address}</h3>
                  <h4>Asking: ${numberWithCommas(offer.home.price)}</h4>
                  <h4>Your offer: ${numberWithCommas(offer.amount)}</h4>
                  <button onClick={()=>setShowForm({...showForm, [index]: !showForm[index]})}>
                {showForm[index] ? 'Cancel' : 'Edit Offer'}
            </button>
            {showForm[index] && (
              <form>
                <input type="text" value={amount} onChange={handleChange} />
                <button onClick={() => handleEdit(offer.id)}>Edit Offer</button>
                <FormField>
                    {errors.map((err) => (
                        <Error key={err}>{err}</Error>
                    ))}
                </FormField>
              </form>)}
                  <button onClick={() => handleDelete(offer.id)}>Delete offer</button>
                </div>
              )
            }) : <p>You have no offers</p>}
          <h2>
            {`You have `}
            <Link to="/dashboard">{user.offer_count}</Link>
            {user.offer_count === 1 ? ' offer on your Listings' : ' offers on your Listings'}
          </h2>
          <h2>Your Personal Favorites:</h2>
          <Wrapper className="homelist-loggedin">
            {homewatches.length > 0
              ? homewatches.map((homewatch) => (
                  <Home key={homewatch.home_id}>
                    <h1>{homewatch.home.address}</h1>
                    <Box>
                      <img
                        src={homewatch.home.photos[0].image_url}
                        alt={homewatch.home.bio}
                        className="homeListListings"
                      />
                      <ul>By {homewatch.user.username.toUpperCase()}</ul>
                
                      <ReactMarkdown>{homewatch.home.bio}</ReactMarkdown>
                      <div className="ListingButton">
                      <Button  as={Link} to={`/homes?id=${homewatch.home.id}`}>
                      View Full Listing
                    </Button>
                    <Button onClick={() => handleDeleteHomewatch(homewatch.id)}>
                      Remove From My Favorites
                    </Button>
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
                  <h1>{home.address}</h1>
                  <Box>
                    <img
                      src={home.photos.map((photo) => photo.image_url)}
                      alt={home.bio}
                      className="homeListListings"
                    />
                    <ul>By {home.user.username.toUpperCase()}</ul>
                    <ReactMarkdown>{home.bio}</ReactMarkdown>
                    <div className="ListingButton">
                    <Button  as={Link} to={`/homes?id=${home.id}`}>
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
