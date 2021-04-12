import React from "react";
import './style.scss';

export default function Header() {
  return (
    <div className="header-container" data-scroll>
        <ul className='header-menu'>
          <li>Intro</li>
          <li>About</li>
          <li>Featured</li>
        </ul>
      <h1>Art Objects</h1>
    </div>
  );
}
