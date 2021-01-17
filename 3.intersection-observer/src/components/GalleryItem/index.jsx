import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import useOnScreen from "../../hooks/useOnScreen";
import "./style.scss";
import { points } from "../../data";

export default function GalleryItem({ src, index, columnOffset }) {
  const ref = useRef(null);
  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);
  const values = points[index];
  if (!values) return null;
  const [row, column, spanRow, spanColumn] = values;

  const scrollIndex = () => {
    if (index === 1) return -1;
    if (index === 4) return -1;
    if (index === 0) return 0;
    if (index === 3) return 0;

    return 1;
  };
  return (
    <div
      className="gallery-item"
      data-scroll
      data-scroll-speed={scrollIndex()}
      // data-scroll-direction="vertical"
      ref={ref}
      style={{
        gridArea: `${row} / ${column +
          columnOffset} / span ${spanRow} / span ${spanColumn}`,
      }}
    >
      <div className={cn("gallery-item-image", { reveal: reveal })}>
        <div
          className="gallery__item-imginner"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
    </div>
  );
}
