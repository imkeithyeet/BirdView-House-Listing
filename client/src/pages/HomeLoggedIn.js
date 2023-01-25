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
        <h1>Welcome, {user.email}!</h1>
          <h1>Homes for Sale: </h1>
              <div>
              {user.homes.map((home) => (
              <div>
                <img
                  src={home.photos && home.photos.map((photo) => photo && photo.image_url)}
                  alt={home.bio}
                  className="dashListings"
                />
                <li>{home.address}</li>
                </div>
              ))}
              </div>
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
