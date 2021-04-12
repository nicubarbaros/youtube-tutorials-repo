import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import photos from "../data";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

import "../styles/home.scss";
import GalleryItem from "../components/GalleryItem";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCursor from "../CustomCursor";
import Header from "../components/Header";

const Home = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
      const scroll = new LocomotiveScroll({
        el: ref.current,
        smooth: true,
        // direction: "horizontal",
        multiplier: 0.5,
      });
    }
  }, []);

  if (typeof window === "undefined" || !window.document) {
    return null;
  }
  return (
    <>
      <CustomCursor />
      <div className="top"></div>
      <Navbar />
      <div className="main-container" data-scroll-container ref={ref}>
        <div data-scroll-section>
          <Header />
        </div>
        <div data-scroll-section>
          <img data-scroll src={photos[0]} />
        </div>
        <div data-scroll-section>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Home;
