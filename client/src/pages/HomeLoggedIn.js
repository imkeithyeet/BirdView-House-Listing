import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";

function HomeLoggedIn({ user }) {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    fetch("/homes")
      .then((r) => r.json())
      .then(setHomes);
  }, []);

  return (
    <Wrapper>
      <h1>Welcome, {user && user.username}!</h1>
      {/* {homes.length > 0 ? (
        homes.map((home) => (
          <Recipe key={home.id}>
            <Box>
              <img
                src={home.photos.map((photo) => photo.image_url)}
                alt={home.bio}
              />
              <cite>By {home.user.email}</cite>
              <ReactMarkdown>{home.bio}</ReactMarkdown>
            </Box>
          </Recipe>
        ))
      ) : (
        <>
          <h2>No Homes Yet! Browse our Catalogue:</h2>
          <Button as={Link} to="/new">
            Make a New Recipe
          </Button>
        </>
      )} */}
      <h2>{user.homes.map((home) => home.address)}</h2>
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
