import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useState } from "react";
function HomeCarousel({ homes }) {
    const renderSlides = homes.map((home) =>
      home.photos.map((photo) => (
        <div key={photo.description}>
          <img src={photo.image_url} alt={photo.description} />
          <p className="caption">{photo.description}</p>
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
        autoPlay={true}
        infiniteLoop={true}
        onChange={handleChange}
        selectedItem={homes[currentIndex]?.photos[0]}
        className="carousel-container"
      >
        {renderSlides}
      </Carousel>
    );
  }
  export default HomeCarousel;