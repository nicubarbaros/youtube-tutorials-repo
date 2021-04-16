import React, { useEffect, useRef, useState } from "react";

import "./style.scss";
import gsap from "gsap";
import SplitText from "../About/Split3.min";
import useOnScreen from "../../hooks/useOnScreen";
import cn from "classnames";

export default function Header() {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref, 0);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#header-text", {
        type: "lines",
        linesClass: "lineChildren",
      });
      const splitParent = new SplitText("#header-text", {
        type: "lines",
        linesClass: "lineParent",
      });

      gsap.fromTo(
        split.lines,
        { y: 200 },
        {
          duration: 1,
          y: 0,
          // opacity: 1,
          stagger: 0.1,
          ease: "power2",
        }
      );
    }
  }, [reveal]);
  return (
    <section className="header-container" data-scroll-section>
      <ul className="header-menu">
        <li>Intro</li>
        <li>About</li>
        <li>Featured</li>
      </ul>
      <h1 id="header-text" ref={ref}>
        Art Objects
      </h1>
    </section>
  );
}
