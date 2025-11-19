import React, { useEffect } from "react";
import CarouselCard from "./CarouselCard";
import "./carousel.css";

// Data per carousel, use as props or import from local JS
const carousel1Data = [
  {
    title: "Billboard Implosion",
    description:
      "A towering billboard disintegrates into sharp shards and tangled frames, caught in the moment of collapse amid a surreal desert landscape.",
    imgSrc:
      "https://www.lessrain.com/dev/images-2025/carousel/lr-demo-img-01.png",
    imgSrcSet:
      "https://www.lessrain.com/dev/images-2025/carousel/lr-demo-img-01-300x300.webp 300w, https://www.lessrain.com/dev/images-2025/carousel/lr-demo-img-01-435x435.webp 435w, https://www.lessrain.com/dev/images-2025/carousel/lr-demo-img-01-820x820.webp 820w",
    ctaUrl: "https://codepen.io/luis-lessrain/pen/ogNKBmx",
  },
  // ...repeat for each slide
];

export default function CarouselGroup() {
  useEffect(() => {
    if (window.createCarousel) {
      window.createCarousel().initialize({
        selector: "#carousel_1",
        isScrubActive: true,
        isScrubOnTouchActive: true,
      });
      // add other carousels as needed, e.g. #carousel_2/#carousel_3
    }
  }, []);

  return (
    <div className="viewport-wrapper">
      <div className="content-scroll">
        <main className="main-content">
          <section className="dummy-block" style={{ margin: "36px 0" }}>
            <div>
              <h2>ScrollSynced Carousel (Gsap + Swiper)</h2>
              <h3>
                Scroll Down
                <br />↓
              </h3>
            </div>
          </section>
          {/* CAROUSEL 1 */}
          <section className="carousel" id="carousel_1">
            <div className="wrapper">
              <div className="text-before" style={{ paddingLeft: "2rem" }}>
                <h2>Fragments of a Digital Collapse.</h2>
              </div>
              <div className="swiper-container">
                <div className="swiper-column-gap"></div>
                <div className="swiper-wrapper">
                  {carousel1Data.map((slide, i) => (
                    <div className="swiper-slide" key={i}>
                      <CarouselCard {...slide} />
                    </div>
                  ))}
                </div>
                <div className="swiper-pagination-container">
                  <div className="swiper-pagination-wrapper swiper-no-swiping">
                    <div className="swiper-pagination"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="dummy-block" style={{ margin: "36px 0" }}>
            <div>
              <h3>
                ↑<br />
                Scroll Up
              </h3>
              <h2>ScrollSynced Carousel (Gsap + Swiper)</h2>
            </div>
          </section>
        </main>
      </div>
      {/* Global blocker */}
      <div id="app_blocker"></div>
      {/* Site-wide resources bar */}
      <div className="resources-layer">
        <div className="resources">
          <a href="https://www.lessrain.com">Less Rain GmbH</a>
          <a href="https://codepen.io/collection/bNyZkZ">
            JavaScript Codepen Collection
          </a>
          <a href="https://codepen.io/collection/vOBVrG">
            Codepen Challenges Collection
          </a>
        </div>
      </div>
    </div>
  );
}
