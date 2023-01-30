import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useState } from "react";
import "../styles/HomeCarousel.css";
function HomeCarousel({ homes }) {
  const renderSlides = homes.map((home) =>
    home.photos.map((photo) => (
      <div key={photo.description}>
        <img
          className="carousel-image"
          src={
            (home.photos?.length > 0 && home.photos[0].image_url) ||
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
          }
          alt={photo.description}
        />
        <div className="words">
          <h1 className="carousel-caption">{photo.description}</h1>
          <h2 className="carousel-caption">{home.address}</h2>
        </div>
      </div>
    ))
  );

  const [currentIndex, setCurrentIndex] = useState();

  function handleChange(index) {
    setCurrentIndex(index);
  }

  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showIndicators={false}
      transitionTime={30}
      onChange={handleChange}
      selectedItem={homes[currentIndex]?.photos[0]}
      className="carousel-container"
    >
      {renderSlides}
    </Carousel>
  );
}
export default HomeCarousel;
