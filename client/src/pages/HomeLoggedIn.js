import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";
import "../styles/HomeLoggedIn.css"

function HomeLoggedIn({ user }) {
  const [homes, setHomes] = useState([]);

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
          <h2>
            {`You have `}
            <Link to="/dashboard">{user.offer_count}</Link>
            {user.offer_count == 1 ? ' offer!' : ' offers!'}
          </h2>
            <h1>Browse our Catalogue of Homes: </h1>
            <Wrapper className="homeLoggedList" >
      {homes.length > 0 ? (
        homes.map((home) => (
          <Recipe key={home.id}>
            <h1>{home.address}</h1>
            <Box>
              <img
                src={home.photos.map((photo) => photo.image_url)}
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

