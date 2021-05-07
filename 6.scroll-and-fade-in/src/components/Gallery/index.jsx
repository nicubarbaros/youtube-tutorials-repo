import React, { useEffect, useRef, useState } from "react";
import SectionHeader from "../SectionHeader";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";
import "./style.scss";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useOnScreen from "../../hooks/useOnScreen";
import cn from 'classnames';

const images = [
  "https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1345&q=100",
  "https://images.unsplash.com/photo-1558603668-6570496b66f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=100",
  "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=100",
];

function GalleryItem({ src }) {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref, 0.1);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  return (
    <div className={cn("gallery-item-wrapper", {'is-reveal': reveal})} ref={ref}>
      <div className={"gallery-item"}>
        <div
          className="gallery-item-image"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
    </div>
  );
}

export default function Gallery({ src, index, columnOffset }) {
  const ref = useRef(null);

  useEffect(() => {

    // This does not seem to work without a settimeout
    setTimeout(() => {
      console.log(ref.current.offsetWidth);
      let sections = gsap.utils.toArray(".gallery-item-wrapper");
      console.log(sections);
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          start: "top top",
          trigger: ref.current,
          scroller: "#main-container",
          pin: true,
          scrub: 0.5,
          snap: 1 / (sections.length - 1),
          end: () => `+=${ref.current.offsetWidth}`,
          markers: true,
        },
      });
      ScrollTrigger.refresh();
    });
  }, []);

  return (
    <section data-scroll-section className="section-wrapper pin-wrap">
      <SectionHeader title="gallery" />
      <div className="gallery" ref={ref}>
        {[...images, ...images, ...images].map((src) => (
          <GalleryItem key={src} src={src} />
        ))}
      </div>
    </section>
  );
}
