import React, { useEffect } from "react";
import batmanSuits from "./Data/batmanSuits";
import "./batmanCarousel.css"; // use your refactored Codepen CSS

export default function BatmanCarousel() {
  useEffect(() => {
    // Make sure "createCarousel" is loaded globally (from utils/Codepen JS)
    if (window.createCarousel) {
      window.createCarousel().initialize({
        selector: "#carousel_1",
        isScrubActive: true, // use scroll sync as in Codepen
        isScrubOnTouchActive: true,
      });
    }
  }, []);

  return (
    <div className="viewport-wrapper">
      <div className="content-scroll">
        <main className="main-content">
          {/* Batman suits carousel */}
          <div className="carousel" id="carousel_1" data-scrub="true">
            <div className="wrapper">
              <div className="text-before">
                <h2>Batman: Every Live Action Suit</h2>
              </div>
              <div className="swiper-container">
                <div className="swiper-column-gap"></div>
                <div className="swiper-wrapper">
                  {batmanSuits.map((suit) => (
                    <div className="swiper-slide no-interaction" key={suit.id}>
                      <div className="card">
                        <div className="media-container">
                          <picture>
                            {/* You can add <source> tags for webp if available */}
                            <img
                              className="fit-cover middle-center"
                              src={
                                suit.image
                                  ? suit.image
                                  : `/images/batman/${suit.id}.jpg`
                              }
                              alt={suit.name}
                              width={480}
                              height={480}
                              decoding="async"
                            />
                          </picture>
                        </div>
                        <div className="card-text">
                          <h3 className="title">{suit.name}</h3>
                          <p>{suit.abilities}</p>
                          {/* Optional: A suit wiki link or video if you want a button (comment out if not needed) */}
                          {/* <a href={suit.wiki} className="cta-button" target="_blank" rel="noopener noreferrer"><span className="text">Learn More</span></a> */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="swiper-navigation-container">
                  <button className="swiper-prev">Prev</button>
                  <button className="swiper-next">Next</button>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>

          {/* Bottom dummy block */}
          <div className="dummy-block">
            <div>
              <h3>
                ↑<br />
                Scroll Up
              </h3>
              <h2>ScrollSynced Carousel (Gsap + Swiper)</h2>
            </div>
          </div>
        </main>
      </div>
      <div id="app_blocker"></div>
    </div>
  );
}
