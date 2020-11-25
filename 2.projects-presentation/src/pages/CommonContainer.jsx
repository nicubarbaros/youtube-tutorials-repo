import React, { useState } from "react";
import cn from "classnames";

export default function CommonContainer(props) {
  const [first] = props.mediaData;
  const [activeMedia, setActiveMedia] = useState(first);

  return (
    <>
      <div className={`navigation ${props.position}`}>
        <h2>{props.title}</h2>
        <ul>
          {props.mediaData.map((media, index) => (
            <li
              className={cn({
                active: media.mediaUrl === activeMedia.mediaUrl,
              })}
              key={index}
              onMouseOver={() => setActiveMedia(media)}
            >
              {media.title}
            </li>
          ))}
        </ul>
      </div>

      {props.render(activeMedia)}
    </>
  );
}
