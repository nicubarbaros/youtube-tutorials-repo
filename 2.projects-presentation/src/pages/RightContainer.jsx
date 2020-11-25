import React, { useState } from "react";
import { videoData } from "../data.js";
import VideoPlayer from "./VideoPlayer.jsx";
import CommonContainer from "./CommonContainer.jsx";

export default function RightContainer() {
  return (
    <CommonContainer
      position='right'
      title='Film'
      mediaData={videoData}
      render={(media) => (
        <div className="container container-right">
          <VideoPlayer src={media.mediaUrl} />

          <h1 className="container-big-title">{media.title}</h1>
        </div>
      )}
    />
  );
}
