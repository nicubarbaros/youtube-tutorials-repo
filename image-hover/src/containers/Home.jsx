import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import photos from "../data";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

import "../styles/home.scss";
import CustomCursor from "../CustomCursor";
import Gallery from "../components/Gallery";

const Home = () => {
  const ref = useRef(null);

  

  if (typeof window === "undefined" || !window.document) {
    return null;
  }
  return (
    <>
      <div className="absolute"></div>
      <CustomCursor />
      <div className="main-container" data-scroll-container ref={ref}>
        <Gallery />
      </div>
    </>
  );
};
export default Home;
