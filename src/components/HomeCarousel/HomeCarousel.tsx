import { useEffect, useState } from "react";
import "./HomeCarousel.css";

const slides = [
  {
    src: "/images/mechanic-engine.jpg",
    alt: "Mechanic working on a car engine in a workshop",
  },
  {
    src: "/images/mechanic-wheel.jpg",
    alt: "Mechanic changing a car wheel",
  },
  {
    src: "/images/engine-detail.jpg",
    alt: "Close-up view of a vehicle engine",
  },
];

function HomeCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 2600);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="home-carousel" aria-label="VS4 Autos vehicle care images">
      {slides.map((slide, index) => (
        <img
          className={`home-carousel__image${index === activeSlide ? " home-carousel__image--active" : ""}`}
          src={slide.src}
          alt={index === activeSlide ? slide.alt : ""}
          aria-hidden={index !== activeSlide}
          key={slide.src}
        />
      ))}
    </div>
  );
}

export default HomeCarousel;
