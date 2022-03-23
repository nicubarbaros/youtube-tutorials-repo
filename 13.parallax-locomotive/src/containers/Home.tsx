import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

import imagesLoaded from "imagesloaded";

import "../styles/home.scss";

const preloadImages = (selector) => {
  return new Promise((resolve) => {
    imagesLoaded(
      document.querySelectorAll(selector),
      { background: true },
      resolve
    );
  });
};
export default function Home() {
  const ref = useRef(null);

  useEffect(() => {
    const scrollElement = new LocomotiveScroll({
      el: ref.current,
      smooth: true,
      smartphone: {
        smooth: true,
      },
      // direction: "horizontal",
      // multiplier: 0.5,
      getDirection: true,
      getSpeed: true,
      // lerp: 0.5
    });

    // Preload images
    Promise.all([preloadImages(".grid-item-media")]).then(() => {
      scrollElement.update();
    });
  }, []);
  return (
    <div
      className="main-container"
      id="main-container"
      data-scroll-container
      ref={ref}
    >
      <div className="hero-container">
        <img
          data-scroll
          data-scroll-speed="-8"
          src="https://images.unsplash.com/photo-1595169269486-4e46d9b9a8d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        />
        <h1 data-scroll data-scroll-speed="-5">
          Just A Cactus
        </h1>
      </div>

      <div className="intro-container" data-scroll data-scroll-speed="0">
        <p>
          Cacti have interesting shapes and beautiful flowers. They thrive on
          neglect and come in nearly endless varieties. Ranging in size from a
          few inches to several feet, cacti can be used as massed plantings,
          backgrounds or accents. Many species grow well in containers and make
          attractive, unusual houseplants. Once established, there’s little to
          do but sit back and enjoy them.
        </p>
      </div>
    </div>
  );
}
