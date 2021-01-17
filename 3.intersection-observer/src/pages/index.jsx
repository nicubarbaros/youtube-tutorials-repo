import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { imageData } from "../data";
import LocomotiveScroll from "locomotive-scroll";
import "../../node_modules/locomotive-scroll/src/locomotive-scroll.scss";

import "../styles/home.scss";
import GalleryItem from "../components/GalleryItem";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Index = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref) {
      const scroll = new LocomotiveScroll({
        el: ref.current,
        smooth: true,
        direction: "horizontal",
        multiplier: 0.5,
      });
    }
  }, []);
  const images = imageData.map((tupples, index) =>
    tupples.map((url, elementIndex) => (
      <GalleryItem
        key={url}
        src={url}
        index={elementIndex}
        columnOffset={index * 14}
      />
    ))
  );

  return (
    <>
      <div className="top"></div>
      <Navbar />
      <div className="main-container">
        <div className="scroll-container" data-scroll-container ref={ref}>
          <div className="content">
            <div className="gallery">
              {images}
              <div className="gallery-helper">Scroll to discover more</div>
              <div className="behind-text fill" data-scroll data-scroll-speed>
                every body loves a good story
              </div>
              <div
                className="behind-text outline"
                data-scroll
                data-scroll-speed
              >
                every body loves a good story
              </div>
              <div />
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;
