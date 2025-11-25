import { useEffect } from "react";
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
    <div className="carousel" id="carousel_1">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {carousel1Data.map((slide, index) => (
            <div className="swiper-slide" key={index}>
              <CarouselCard {...slide} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
