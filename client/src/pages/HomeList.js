import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";
import "../styles/HomeList.css";
import HomeCarousel from "../components/HomeCarousel";

function HomeList() {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    fetch("/homes")
      .then((r) => r.json())
      .then(setHomes);
  }, []);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div>
      <div className="home-carousel">
        <HomeCarousel homes={homes} />
      </div>
      <Wrapper className="homelist">
        {homes.length > 0 ? (
          homes.map((home) => (
            <Home key={home.id}>
              <h1>{home.address}</h1>
              <Box>
                <img
                  src={
                    (home.photos?.length > 0 && home.photos[0].image_url) ||
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
                  }
                  alt={home.bio}
                  className="homeListListings"
                />
                <ul>By {capitalizeFirstLetter(home.user.username)}</ul>
                <ReactMarkdown>{home.bio}</ReactMarkdown>
                <ul className="Price">${numberWithCommas(home.price)}</ul>
                <div className="ListingButton">
                  <Button
                    variant="outline"
                    as={Link}
                    to={`/homes?id=${home.id}`}
                  >
                    View Full Listing
                  </Button>
                </div>
              </Box>
            </Home>
          ))
        ) : (
          <>
            <h2>No Homes Found</h2>
            <Button variant="outline" as={Link} to="/new">
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

const Home = styled.article`
  margin-bottom: 24px;
`;

export default HomeList;
