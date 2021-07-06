import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import photos from "../data";
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
   
    // const scrollElement = new LocomotiveScroll({
    //   el: ref.current,
    //   smooth: true,
    //   smartphone: {
    //     smooth: true,
    //   },
    //   // direction: "horizontal",
    //   // multiplier: 0.5,
    //   getDirection: true,
    //   getSpeed: true,
    //   // lerp: 0.5
    // });
    // scrollElement.on("scroll", (obj) => {
    //   // Find distance between scroll updates
    //   scroll.current.current = obj.scroll.y;
    //   const distance = scroll.current.current - scroll.current.cache;
    //   scroll.current.cache = scroll.current.current;

    //   leftColumnRef.current.style.transform = `skewY(${clamp(
    //     distance,
    //     -10,
    //     10
    //   )}deg)`;
    //   rightColumnRef.current.style.transform = `skewY(${clamp(
    //     distance,
    //     -10,
    //     10
    //   )}deg)`;
    //   middleColumnRef.current.style.transform = `skewY(${clamp(
    //     -distance,
    //     -10,
    //     10
    //   )}deg)`;
    // });

    // // Preload images
    // Promise.all([preloadImages(".grid-item-media")]).then(() => {
    //   scrollElement.update();
    // });
  }, []);

  return (
    <>

      <div
        className="main-container"
        id="main-container"
        data-scroll-container
        ref={ref}
      >
        
      </div>
    </>
  );
};
export default Home;
