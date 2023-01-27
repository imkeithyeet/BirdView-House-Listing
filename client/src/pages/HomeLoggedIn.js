import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";
import "../styles/HomeLoggedIn.css";

function HomeLoggedIn({ user, onDeleteHomewatch }) {
  const [homes, setHomes] = useState([]);
  const [homewatches, setHomewatches] = useState([]);

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
          <h2>Your Personal Favorites</h2>
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
                    </Box>
                    <Button as={Link} to={`/homes?id=${homewatch.home.id}`}>
                      View Full Listing
                    </Button>
                    <Button onClick={() => handleDeleteHomewatch(homewatch.id)}>
                      Remove From My Favorites
                    </Button>
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
                  </Box>
                  <Button as={Link} to={`/homes?id=${home.id}`}>
                    View Full Listing
                  </Button>
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
