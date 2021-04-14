import React from "react";
import './style.scss';

export default function Header() {
  return (
    <section className="header-container" data-scroll-section>
        <ul className='header-menu'>
          <li>Intro</li>
          <li>About</li>
          <li>Featured</li>
        </ul>
      <h1>Art Objects</h1>
    </section>
  );
}
