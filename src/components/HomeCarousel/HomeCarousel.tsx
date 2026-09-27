import { useEffect, useState } from "react";
import "./HomeCarousel.css";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1500&q=85",
    alt: "Mechanic inspecting a vehicle in a workshop",
  },
  {
    src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1500&q=85",
    alt: "Technician working on a car engine",
  },
  {
    src: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1500&q=85",
    alt: "Detailed view of a vehicle during maintenance",
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
