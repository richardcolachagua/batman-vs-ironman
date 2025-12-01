// BatmanCarousel.jsx
import { useEffect } from "react";
import batmanSuits from "./Data/batmanSuits";
import "./batmanCarousel.css";

export default function BatmanCarousel() {
  useEffect(() => {
    if (window.createCarousel) {
      window.createCarousel().initialize({
        selector: "#carousel_1",
        isScrubActive: true,
        isScrubOnTouchActive: true,
      });
    }
  }, []);

  return (
    <section className="carousel" id="carousel_1">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {batmanSuits.map((suit) => (
            <div className="swiper-slide" key={suit.name}>
              <article className="card">
                <div className="media-container">
                  <img src={suit.image} alt={suit.name} />
                </div>
                <div className="card-text">
                  <h3>{suit.name}</h3>
                  <p>{suit.abilities}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
