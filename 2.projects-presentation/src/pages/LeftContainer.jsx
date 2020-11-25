import React from "react";
import ImagePlayer from "./ImagePlayer";
import { imageData } from "../data.js";
import CommonContainer from "./CommonContainer";
export default function LeftContainer() {
  return (
      <CommonContainer
        mediaData={imageData}
        position='left'
        title='Photo'
        render={(media) => (
          <div className="container container-left">
            <ImagePlayer src={media.mediaUrl} alt={media.title} />
            <h1 className="container-big-title">{media.title}</h1>
          </div>
        )}
      />
  );
}
