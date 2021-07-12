import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { pageData } from "../data";
import LocomotiveScroll from "locomotive-scroll";

import Title from "../components/Title";
import Image from "../components/Image";

import "locomotive-scroll/src/locomotive-scroll.scss";
import "../styles/home.scss";
import Header from "../components/Header";

const Home = () => {
  const ref = useRef(null);

  const [rotationPosition, setRotation] = useState(
    new Array(pageData.length).fill(0)
  );
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    // const scrollElement = new LocomotiveScroll({
    //   el: ref.current,
    //   smooth: true,
    //   smartphone: {
    //     smooth: true,
    //   },
    // });
  }, []);

  const handleSetRotation = (itemIndex) => {
    // Random between -7 and 7
    const newRotation =
      Math.random() * 7 * (Math.round(Math.random()) ? 1 : -1);

    const tempState = [...rotationPosition];
    tempState[itemIndex] = newRotation;
    setRotation(tempState);
    setActiveIndex(itemIndex);
  };

  return (
    <>
      <Header />
      <div className="main-container" id="main-container">
        <div className="title-container" ref={ref} data-scroll-container>
          {pageData.map(({ title }, index) => (
            <Title
              key={title}
              title={title}
              index={index}
              setRotation={handleSetRotation}
              setIndex={setActiveIndex}
            />
          ))}
        </div>
        <div className="image-container">
          {pageData.map(({ url }, index) => (
            <Image
              key={url}
              url={url}
              active={activeIndex === index}
              rotationPosition={rotationPosition[index]}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;
