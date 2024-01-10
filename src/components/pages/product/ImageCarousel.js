import React, { useState } from "react";

export default function ImageCarousel({ images }) {
  const [activeImageSlide, setActiveImageSlide] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(images[0]);

  const handleImageClick = (index) => {
    setActiveImageSlide(index);
    setBackgroundImage(images[index]);
  };

  return (
    <div
      className="image-slider"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="product-images">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            className={index === activeImageSlide ? "active" : ""}
            alt="Product pic"
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
