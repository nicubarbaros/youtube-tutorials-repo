import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import useOnScreen from "../../hooks/useOnScreen";
import "./style.scss";
import { points } from "../../data";

const images = [
  "https://images.unsplash.com/photo-1576174464184-fb78fe882bfd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=100",
  "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1300&q=100",
  "https://images.unsplash.com/photo-1580428180163-76ab1efe2aed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1300&q=100",
];

function GalleryItem({ src }) {
  const ref = useRef(null);
  const [clipMaskRadius, setClipMaskRadius] = useState(0);
  const [clipMask, setClipMask] = useState({ x: 0, y: 0 });
  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    ref.current.addEventListener("mouseenter", () => {
      setClipMaskRadius(25);
      console.log("mouseenter");
    });
    ref.current.addEventListener("mouseleave", () => {
      setClipMaskRadius(0);
      console.log("mouseleave");
    });

    function GetCoordinates(e) {
      var ImgPos = {
        posX: ref.current.offsetLeft,
        posY: ref.current.offsetTop,
      };

      const PosX = e.pageX - ImgPos.posX;
      const PosY = e.pageY - ImgPos.posY;
      setClipMask({
        x: (PosX / ref.current.clientWidth) * 100,
        y: (PosY / ref.current.clientHeight) * 100,
      });
    }

    ref.current.addEventListener("mousemove", (element, c, s, r) => {
      window.requestAnimationFrame(() => {
        GetCoordinates(element);
      });
      // requestAnimationFrame();
    });
  }, []);
  return (
    <div
      className={cn("gallery-item-wrapper", { "is-reveal": reveal })}
      ref={ref}
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

export default function Gallery({ src, index, columnOffset }) {
  return (
    <section data-scroll-section>
      <div className="gallery">
        {images.map((src) => (
          <GalleryItem key={src} src={src} />
        ))}
      </div>
    </section>
  );
}
