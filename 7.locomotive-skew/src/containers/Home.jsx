import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import photos from "../data";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";
import GridItem from "../components/GridItem";

import CustomCursor from "../CustomCursor";
import imagesLoaded from "imagesloaded";

import "../styles/home.scss";

const clamp = (value, min, max) =>
  value <= min ? min : value >= max ? max : value;

const preloadImages = (selector) => {
  return new Promise((resolve) => {
    imagesLoaded(
      document.querySelectorAll(selector),
      { background: true },
      resolve
    );
  });
};

const Home = () => {
  const ref = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const middleColumnRef = useRef(null);
  const scroll = useRef({
    cache: 0,
    current: 0,
  });
  useEffect(() => {
    // if (ref) {
    //   if (typeof window === "undefined" || !window.document) {
    //     return;
    //   }
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
    scrollElement.on("scroll", (obj) => {
      // Find distance between scroll updates
      scroll.current.current = obj.scroll.y;
      const distance = scroll.current.current - scroll.current.cache;
      scroll.current.cache = scroll.current.current;

      leftColumnRef.current.style.transform = `skewY(${clamp(
        distance,
        -10,
        10
      )}deg)`;
      rightColumnRef.current.style.transform = `skewY(${clamp(
        distance,
        -10,
        10
      )}deg)`;
      middleColumnRef.current.style.transform = `skewY(${clamp(
        -distance,
        -10,
        10
      )}deg)`;
    });

    // Preload images
    Promise.all([preloadImages(".grid-item-media")]).then(() => {
      scrollElement.update();
    });
  }, []);

  const leftChunk = [...photos].splice(0, 5);
  const middleChunk = [...photos].splice(5, 5);
  const rightChunk = [...photos].splice(10, 5);
  console.log(photos.splice(5, 10));
  return (
    <>
      <CustomCursor />

      <div
        className="main-container"
        id="main-container"
        data-scroll-container
        ref={ref}
      >
        <div className="grid-wrap">
          <div className="left-column" ref={leftColumnRef}>
            {leftChunk.map(({ url, description }, index) => (
              <GridItem
                key={url}
                url={url}
                description={description}
                index={index}
              />
            ))}
          </div>
          <div className="middle-column" data-scroll data-scroll-speed="-20">
            <div ref={middleColumnRef}>
              {middleChunk.map(({ url, description }, index) => (
                <GridItem
                  key={url}
                  url={url}
                  description={description}
                  index={index}
                />
              ))}
            </div>
          </div>
          <div className="right-column" ref={rightColumnRef}>
            {rightChunk.map(({ url, description }, index) => (
              <GridItem
                key={url}
                url={url}
                description={description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
