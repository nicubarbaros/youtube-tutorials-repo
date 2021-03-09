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
        start: "top top",
        // end: "+=1000",
        // anticipatePin: 1,
        markers: true,
      },
    });
    // add animations and labels to the timeline
    // tl.addLabel("ere")
    //   .to(phoneRef.current, { scale: 1.2 }, "+=0.2")
    //   .addLabel("color");
    tl.to(
      ".hero-container",
      {
        // selector text, Array, or object
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
