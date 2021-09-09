import React from "react";
import cn from "classnames";

export default function Image({
  url,
  active,
  rotationPosition,
  parallaxPos,
  scale,
  opacity,
}) {
  return (
    <img
      className={cn({ active })}
      style={{
        opacity: opacity,
        transform: `translate3d(${parallaxPos.x}px, ${parallaxPos.y}px, 0px) rotate(${rotationPosition}deg) scale(${scale}) `,
      }}
      src={url}
    />
  );
}
