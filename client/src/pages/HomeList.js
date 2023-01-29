import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";
import "../styles/HomeList.css";
import HomeCarousel from "../components/HomeCarousel";

function HomeList() {
  const [homes, setHomes] = useState([]);
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    fetch("/homes")
      .then((r) => r.json())
      .then(setHomes);
  }, []);

  return (
    <div>
      <div className="home-carousel">
        <HomeCarousel homes={homes} />
      </div>
      <Wrapper className="homelist">
        {homes.length > 0 ? (
          homes.map((home) => (
            <Recipe key={home.id}>
              <h1>{home.address}</h1>
              <Box>
                <img
                  src={home.photos && home.photos[0].image_url}
                  alt={home.bio}
                  className="homeListListings"
                />
                <ul>By {home.user.username}</ul>
                <ReactMarkdown>{home.bio}</ReactMarkdown>
                <ul className="Price">${numberWithCommas(home.price)}</ul>
                <div className= "ListingButton">
                  <Button as={Link} to={`/homes?id=${home.id}`} >
                    View Full Listing
                  </Button>
                </div>
              </Box>
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
