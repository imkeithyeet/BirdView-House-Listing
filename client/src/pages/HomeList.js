import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";
import "../styles/HomeList.css"
import HomeCarousel from "../components/HomeCarousel";


function HomeList() {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    fetch("/homes")
      .then((r) => r.json())
      .then(setHomes);
  }, []);

  return (
    <div> 
      <HomeCarousel homes={homes} />
    <Wrapper>
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
               <p4>{home.user.username}</p4>
              <ul>By {home.user.email}</ul>
              <ReactMarkdown>{home.bio}</ReactMarkdown>
              <ul className="Price">${home.price}</ul>

              < div className= "ListingButton">
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
