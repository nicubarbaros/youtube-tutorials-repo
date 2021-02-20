import React from "react";
import { photos } from "../data";

import "../styles/home.scss";
const Index = () => {
  return (
    <div>
      <div className="header">
        <div className="log">billy</div>
        <ul>
          <li>works</li>
          <li>about</li>
        </ul>
      </div>
      <div className="top-banner">
        <div className="top-banner-content">
          <h1>independent designer</h1> based in <span>Denmark</span>
          <iframe
            title={"src"}
            className={`resp-iframe `}
            src={
              "https://player.vimeo.com/video/91284753?autoplay=1&loop=1&autopause=0&muted=1"
            }
            width="640"
            height="360"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
            allow="autoplay; fullscreen"
            controls="0"
          ></iframe>
        </div>
        <div className="top-banner-scrolldown">
          <span>☟</span>
        </div>
      </div>
      <div className="main-container menu-list">
        {photos.map(({ title, url }, index) => (
          <div key={url} className="menu-item">
            <h1 className="menu-title">
              <span className="counter">{index + 1}.</span>
              {title}
            </h1>
            <h1 className="menu-title clone">
              <span className="counter">{index + 1}.</span>
              {title}
            </h1>

            <div className="menu-image-container">
              <div
                className="menu-image"
                style={{
                  backgroundImage: `url(${url})`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Index;
