import React, { useEffect } from "react";
import batmanSuits from "./Data/batmanSuits"; // or ironmanSuits, if needed
import "./batmanCarousel.css";

export default function SuitCarousel() {
  useEffect(() => {
    // Assumes Swiper/GSAP/util-v3.js are loaded globally (as in Codepen setup)
    if (window.createCarousel) {
      window.createCarousel().initialize({
        selector: "#carousel_1",
        isScrubActive: true,
        isScrubOnTouchActive: true,
      });
    }
  }, []);

  return (
    <div id="carousel_1" className="carousel">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {/* Render each suit as a Swiper slide */}
          {batmanSuits.map((suit, idx) => (
            <div className="swiper-slide" key={suit.id}>
              <div className="card">
                <div className="media-container">
                  <img
                    src={suit.image || `/images/${suit.id}.jpg`}
                    alt={suit.name}
                    className="fit-cover middle-center"
                    style={{ borderRadius: "16px", marginBottom: 8 }}
                  />
                </div>
                <div className="card-text">
                  <h3>{suit.name}</h3>
                  <p>{suit.abilities}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-column-gap"></div>
        <div className="swiper-pagination"></div>
        <div className="swiper-navigation-container">
          <button className="swiper-prev">Prev</button>
          <button className="swiper-next">Next</button>
        </div>
      </div>
    </div>
  );
}
