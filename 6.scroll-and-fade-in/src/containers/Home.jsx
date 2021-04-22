import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import photos from "../data";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

import "../styles/home.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCursor from "../CustomCursor";
import Header from "../components/Header";
import Featured from "../components/Featured";
import About from "../components/About";
import Gallery from "../components/Gallery";

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
        class: "reveal",
      });
      setTimeout(() => {
        console.log("updated");
        scroll.update();
      }, 3000);
    }
  }, []);

  if (typeof window === "undefined" || !window.document) {
    return null;
  }
  return (
    <>
      <CustomCursor />
      <div className="main-container" data-scroll-container ref={ref}>
        <Navbar />
        <Header />
        <Featured />
        <About />
        <Gallery />
        <Footer />
      </div>
    </>
  );
};
export default Home;
