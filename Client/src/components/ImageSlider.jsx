import React, { useState, useEffect, useRef } from "react";

const images = [
  "/images/slider1.jpg",
  "/images/slider2.jpg",
  "/images/slider3.jpg",
  "/images/slider4.jpg",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef(null);

  useEffect(() => {
    startSlide();
    return () => stopSlide();
    // eslint-disable-next-line
  }, []);

  const startSlide = () => {
    stopSlide();
    slideInterval.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
  };

  const stopSlide = () => {
    if (slideInterval.current) clearInterval(slideInterval.current);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    startSlide();
  };

  return (
    <div className="max-w-6xl mx-auto relative mt-2">
      <div className="overflow-hidden rounded-lg h-[500px] relative">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Slide ${idx + 1}`}
            className={`w-full h-[500px] object-cover absolute top-0 left-0 transition-opacity duration-700 ${
              currentIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ transitionProperty: "opacity" }}
          />
        ))}
      </div>

      <div className="flex justify-center mt-4 space-x-3">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Thumbnail ${idx + 1}`}
            onClick={() => goToSlide(idx)}
            className={`w-20 h-12 object-cover rounded cursor-pointer border-2 ${
              currentIndex === idx ? "border-blue-500" : "border-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
