import React from "react";
import { photos } from "../data";

import "../styles/home.scss";
const Index = () => {
  return (
    <div className="main-container menu-list">
      {photos.map(({ title, url }) => (
        <div key={url} className='menu-item'>
          <h1 className='menu-title'>{title}</h1>
          <h1 className='menu-title clone'>{title}</h1>

          <div
            className='menu-image'
            style={{
              backgroundImage: `url(${url})`,
            }}
          />
        </div>
      ))}
    </div>
  );
};
export default Index;
