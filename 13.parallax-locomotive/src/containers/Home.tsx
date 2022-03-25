import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";
import { timeline, animate, stagger } from "motion";
import imagesLoaded from "imagesloaded";

import "../styles/home.scss";
import { TimelineDefinition } from "@motionone/dom/types/timeline/types";
import useLocomotiveScroll from "../hooks/useLocomotiveScroll";

const preloadImages = (selector) => {
  return new Promise((resolve) => {
    imagesLoaded(
      document.querySelectorAll(selector),
      { background: true },
      resolve
    );
  });
};

function getSectionHeight(element: HTMLUListElement) {
  const { height } = element.getBoundingClientRect();
  const { childElementCount } = element;
  return height / childElementCount;
}
export default function Home() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const countRef = useRef<HTMLUListElement | null>(null);
  const countRef2 = useRef<HTMLUListElement | null>(null);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const titleRef = useRef<HTMLHeadElement | null>(null);
  const imageRef = useRef<HTMLHeadElement | null>(null);

  const locomotiveRef = useLocomotiveScroll({
    ref: scrollRef,
    smooth: true,
    smoothMobile: true,
  });

  useEffect(() => {
    // Preload images
    // Promise.all([preloadImages(".grid-item-media")]).then(() => {
    //   locomotiveRef.update();
    // });
  }, []);

  useEffect(() => {
    if (countRef.current && countRef2.current && loaderRef.current) {
      const transformAmount = getSectionHeight(countRef.current);

      const sequence1 = new Array(3).fill("").flatMap((_, index) => [
        [countRef.current, { y: `-${transformAmount * (index + 1)}px` }],
        [
          countRef2.current,
          { y: `-${transformAmount * (index + 1)}px` },
          { at: "-1.8" },
        ],
      ]) as TimelineDefinition;

      timeline(sequence1, {
        defaultOptions: { easing: [0.77, 0, 0.175, 1], duration: 2 },
      });
    }
  }, []);

  useEffect(() => {
    const sequence2: TimelineDefinition = [
      [titleRef.current, { y: 100 }],
      [imageRef.current, { scale: 1.2 }, { at: "<" }],
      [countRef.current, { opacity: 0 }, { at: "<" }],
      [countRef2.current, { opacity: 0 }, { at: "<" }],
      [loaderRef.current, { y: "-100vh" }, { at: "-0.5" }],
      [titleRef.current, { y: 0 }, { at: "-.5" }],
      [imageRef.current, { scale: 1 }, { at: "<" }],
    ] as TimelineDefinition;

    timeline(sequence2, {
      defaultOptions: { easing: [0.77, 0, 0.175, 1], duration: 1, delay: 7 },
    });
  }, []);

  return (
    <>
      <div className="loader-container" ref={loaderRef}>
        <div className="counter-container">
          <ul className="counter-list" ref={countRef}>
            <li>
              <h3>2</h3>
            </li>
            <li>
              <h3>4</h3>
            </li>
            <li>
              <h3>6</h3>
            </li>
            <li>
              <h3>9</h3>
            </li>
          </ul>
        </div>

        <div className="counter-container">
          <ul className="counter-list" ref={countRef2}>
            <li>
              <h3>3</h3>
            </li>
            <li>
              <h3>9</h3>
            </li>
            <li>
              <h3>8</h3>
            </li>
            <li>
              <h3>9</h3>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="main-container"
        id="main-container"
        data-scroll-container
        ref={scrollRef}
      >
        <div className="hero-container">
          <div data-scroll data-scroll-speed="-8" className="hero-image">
            <img
              ref={imageRef}
              src="https://images.unsplash.com/photo-1595169269486-4e46d9b9a8d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            />
          </div>
          <div data-scroll data-scroll-speed="-5" className="hero-title">
            <h1 ref={titleRef}>Just A Cactus</h1>
          </div>
        </div>

        <div className="intro-container" data-scroll data-scroll-speed="0">
          <p>
            Cacti have interesting shapes and beautiful flowers. They thrive on
            neglect and come in nearly endless varieties. Ranging in size from a
            few inches to several feet, cacti can be used as massed plantings,
            backgrounds or accents. Many species grow well in containers and
            make attractive, unusual houseplants. Once established, there’s
            little to do but sit back and enjoy them.
          </p>
        </div>
      </div>
    </>
  );
}
