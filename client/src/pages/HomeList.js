import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";

function HomeList() {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    fetch("/homes")
      .then((r) => r.json())
      .then(setHomes);
  }, []);

  return (
    <Wrapper>
      {homes.length > 0 ? (
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
          <h2>No Homes Found</h2>
          <Button as={Link} to="/new">
            Sell your home!
          </Button>
        </>
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

export default HomeList;
