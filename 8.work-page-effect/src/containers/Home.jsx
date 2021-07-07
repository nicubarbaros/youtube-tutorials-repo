import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import photos, { pageData } from "../data";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";
import cn from 'classnames';
 
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

  const [rotationPosition, setRotation] = useState(new Array(pageData.length).fill(0));
  const [activeIndex , setActiveIndex ] = useState(-1);
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


  const handleSetRotation = (itemIndex)=>{
    // Random between -7 and 7
    const newRotation =(Math.random() * 7) * (Math.round(Math.random()) ? 1 : -1);

    const tempState = [...rotationPosition];
    tempState[itemIndex] = newRotation;
    setRotation(tempState);
    setActiveIndex(itemIndex);
  }

  console.log(rotationPosition);

  return (
    <>
      <div
        className="main-container"
        id="main-container"
        // data-scroll-container
      >
        <div className="title-container"
        // ref={ref}
        // data-scroll-container
        >
          {pageData.map(({ title }, index) => (
            <div
              className="title-item"
              key={title}
              onMouseEnter={() => handleSetRotation(index)}
              onMouseLeave={() => setActiveIndex(-1)}
            >
              <h1>{title}</h1>
            </div>  
          ))}
        </div>
        <div className="image-container">
          {pageData.map(({ url }, index) => (
            <img
              className={cn({ active: activeIndex === index })}
              style={{
                transform: activeIndex === index   ?`scale(1.1) rotate(${rotationPosition[index]}deg)`: `rotate(${rotationPosition[index]}deg)`
              }}
              key={url}
              src={url}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;
