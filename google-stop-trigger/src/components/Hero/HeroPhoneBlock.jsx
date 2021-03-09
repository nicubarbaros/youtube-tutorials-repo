import React from "react";
import imgSrc from "../../assets/hero-phone-frame-v2.png";
import { gsap } from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

const videoUrl =
  "https://kstatic.googleusercontent.com/files/c44f15bb7e678d651e18fdee3058f2948aa733849e0dea3daf7429bf0f77ec23bd670dba63e71739d5b53489c98689bdbb80c47cf55f44649d9d1bfdf3e4f0a0";

export default function HeroPhoneBlock() {
  const phoneRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);
  useEffect(() => {
    console.log({ c: phoneRef.current });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: phoneRef.current,
        start: "top top",
        end: "+=1000",
        scrub: true,
        pin: true,
        // anticipatePin: 1,
        markers: true,
      },
    });
    // add animations and labels to the timeline
    tl.addLabel("ere")
      .to(phoneRef.current, { scale: 1.2 }, "+=0.2")
      .addLabel("color");
    tl.to(
      ".hero-container",
      {
        // selector text, Array, or object
        backgroundColor: "black", // camelCase
        duration: 0.25, // seconds
      },
      "-=0.5"
    );
  }, []);

  return (
    <div className="hero-phone-block" ref={phoneRef}>
      <div
        className="hero-phone-template"
        style={{ backgroundImage: `url(${imgSrc})` }}
      >
        <video
          className="collage-element"
          playsinline=""
          autoPlay
          webkit-playsinline=""
          loop
          // poster="https://lh3.googleusercontent.com/AJYQSvDZk4lqSWgBeiKFnE6OXdWWp8up4UdugQPqDVqpV4sW4DOtxzOTcuMJYlU771xp4nhG4mCUrOcPM3HiEbxns9QpTz90wLe13w=s0"
          src={videoUrl}
        ></video>
      </div>
    </div>
  );
}
