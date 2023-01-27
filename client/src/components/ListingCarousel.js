import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useState } from "react";

function ListingCarousel({ home }) {
  const renderSlides = home.photos?.map((photo) => (
      <div key={photo.description}>
        <img
            className="carousel-image"
            src={photo.image_url}
            alt={photo.description}
        />
        <p className="carousel-caption">{photo.description}</p>
        </div>
    ))

    const [currentIndex, setCurrentIndex] = useState();

    function handleChange(index) {
        setCurrentIndex(index);
    }

    return (
    <Carousel
        showArrows={true}
        showThumbs={false}
        autoPlay={false}
        infiniteLoop={false}
        showStatus={false}
        showIndicators={true}
        transitionTime={false}
        onChange={handleChange}
        selectedItem={home[currentIndex]?.photos[0]}
        className="listing-carousel-container"
    >
        {renderSlides}
    </Carousel>
    );
}
export default ListingCarousel;
