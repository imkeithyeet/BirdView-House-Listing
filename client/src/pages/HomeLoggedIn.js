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

  return (
    <Wrapper>
      {user && (
        <div>
          <h1>Welcome, {user.username}!</h1>
          <div></div>
          <h2>Offers you have made: </h2>
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
            {user.offer_count == 1 ? ' offer on your Listings' : ' offers on your Listings'}
          </h2>
            <h1>Browse our Catalogue of Homes: </h1>
            <Wrapper className="homeLoggedList" >
      {homes.length > 0 ? (
        homes.map((home) => (
          <Recipe key={home.id}>
            <h1>{home.address}</h1>
            <Box>
              <img
                src={home.photos[0].image_url}
                alt={home.bio}
                className="homeListListings"
              />
              <ul>By {home.user.email}</ul>
              <ReactMarkdown>{home.bio}</ReactMarkdown>
            </Box>
            <Button as={Link} to={`/homes?id=${home.id}`} >
              View Full Listing
            </Button>
          </Recipe>
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

const Recipe = styled.article`
  margin-bottom: 24px;
`;

export default HomeLoggedIn;

