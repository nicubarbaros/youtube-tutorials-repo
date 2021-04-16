import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import useOnScreen from "../../hooks/useOnScreen";
import "./style.scss";
import { points } from "../../data";
import SectionHeader from "../SectionHeader";

const images = [
  "https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1345&q=100",
  "https://images.unsplash.com/photo-1558603668-6570496b66f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=100",
  "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=100",
];

function GalleryItem({ src }) {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  return (
    <div
      className={cn("gallery-item-wrapper", { "is-reveal": reveal })}
      ref={ref}
    >
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
  return (
    <section data-scroll-section>
      <SectionHeader title="gallery" />
      <div className="gallery">
        {images.map((src) => (
          <GalleryItem key={src} src={src} />
        ))}
      </div>
    </section>
  );
}
