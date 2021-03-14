import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroFooter() {
  const phoneRef = useRef(null);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  // }, []);

  useEffect(() => {
    console.log({ c: phoneRef.current });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: phoneRef.current,
        start: "top center",
        scrub: true,
        // markers: true,
      },
    });
    tl.to(
      ".hero-container",
      {
        backgroundColor: "white", // camelCase
        duration: 0.25, // seconds
      },
      "-=2"
    );
  }, []);
  return (
    <div ref={phoneRef} className="hero-text-section">
      <h1>Visual stories that feel like yours, because they are.</h1>
    </div>
  );
}
