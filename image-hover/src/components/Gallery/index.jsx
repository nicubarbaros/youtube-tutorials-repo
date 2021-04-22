import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import { useContext } from "react";
import { CursorContext } from "../../CustomCursor/CursorManager";

import "./style.scss";

const images = [
  "https://images.unsplash.com/photo-1576174464184-fb78fe882bfd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=100",
  "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1300&q=100",
  "https://images.unsplash.com/photo-1580428180163-76ab1efe2aed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1300&q=100",
];

function GalleryItem({ src }) {
  const ref = useRef(null);
  const mouseContext = useContext(CursorContext);
  const [clipMaskRadius, setClipMaskRadius] = useState(0);
  const [clipMask, setClipMask] = useState({ x: 0, y: 0 });
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReveal(true);
    }, 100);
  }, []);

  useEffect(() => {
    function setIntervalUp(callback, delay, repetitions) {
      let value = 0;
      var intervalID = window.setInterval(function() {
        callback(value);

        if (++value === repetitions) {
          window.clearInterval(intervalID);
        }
      }, delay);
    }
    function setIntervalDown(callback, delay, repetitions) {
      let value = repetitions;
      var intervalID = window.setInterval(function() {
        callback(value);

        if (--value === 0) {
          window.clearInterval(intervalID);
        }
      }, delay);
    }
    ref.current.addEventListener("mouseenter", () => {
      setIntervalUp(setClipMaskRadius, 10, 25);
    });
    ref.current.addEventListener("mouseleave", () => {
      setIntervalDown(setClipMaskRadius, 10, 25);
    });

    function getCoordinates(mouse) {
      var ImgPos = {
        posX: ref.current.offsetLeft,
        posY: ref.current.offsetTop,
      };

      const PosX = mouse.pageX - ImgPos.posX;
      const PosY = mouse.pageY - ImgPos.posY;
      setClipMask({
        x: (PosX / ref.current.clientWidth) * 100,
        y: (PosY / ref.current.clientHeight) * 100,
      });
    }

    ref.current.addEventListener("mousemove", (mouse) => {
      window.requestAnimationFrame(() => {
        getCoordinates(mouse);
      });
    });
  }, []);
  return (
    <div
      className={cn("gallery-item-wrapper", { "is-reveal": reveal })}
      ref={ref}
      onMouseEnter={() => mouseContext.setSize("hide")}
      onMouseLeave={() => mouseContext.setSize("small")}
    >
      <div className={"gallery-item"}>
        <div
          className="gallery-item-image sepia"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
        <div
          className="gallery-item-image masked"
          style={{
            backgroundImage: `url(${src})`,
            clipPath: `circle(${clipMaskRadius}% at ${clipMask.x}% ${clipMask.y}%)`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <div className="gallery">
      {images.map((src) => (
        <GalleryItem key={src} src={src} />
      ))}
    </div>
  );
}
