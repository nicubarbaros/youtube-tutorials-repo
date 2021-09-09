import React, { useContext } from "react";
import { CursorContext } from "../CustomCursor/CursorManager";
import "./style.scss";

export default function Header() {
  const { setSize } = useContext(CursorContext);

  const handleMouseEnter = () => {
    setSize("medium");
  };
  const handleMouseLeave = () => {
    setSize("small");
  };
  return (
    <>
      <div className="overlay-nav">
        <div className="header-container">
          <h1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            collab
          </h1>
          <h1 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            studio
          </h1>
        </div>
      </div>
      <div className="overlay-burger">
        <h1>collab</h1>
        <h1>studio</h1>
      </div>
    </>
  );
}
