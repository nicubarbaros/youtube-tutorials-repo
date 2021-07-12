import React from "react";
import cn from "classnames";

export default function Image({ url, active, rotationPosition }) {
  return (
    <img
      className={cn({ active })}
      style={{
        transform: active
          ? `scale(1.1) rotate(${rotationPosition}deg)`
          : `rotate(${rotationPosition}deg)`,
      }}
      src={url}
    />
  );
}
