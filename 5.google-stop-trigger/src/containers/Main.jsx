import React, { useState, useEffect } from "react";
import FeatureSlides from "../components/FeatureSlides";
import Hero from "../components/Hero";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

export default function Main() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, [])

  return loader ? (
    <div className="loader" />
  ) : (
    <div>
      <Hero /> <FeatureSlides />
      <div className="footer">Build your ideal story today.</div>
    </div>
  );
}
