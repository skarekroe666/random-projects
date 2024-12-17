import React, { useState } from "react";
import data from "../ImageSlider/index";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={prevImage}>Previous</button>
      <div style={{ display: "inline-block", margin: "20px 20px",}}>
        <img
          src={data[currentIndex].src}
          alt={`Slide ${currentIndex + 1}`}
          width={data[currentIndex].width}
          height={data[currentIndex].height}
          style={{ objectFit: "cover" }}
        />
      </div>
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default ImageSlider;
