import React, { useContext, useState } from "react";
import cn from "classnames";
import { Hash } from "react-feather";
import { CursorContext } from "../CustomCursor/CursorManager";
import "./style.scss";

export default function Header() {
  const { setSize } = useContext(CursorContext);
  const [opened, setOpen] = useState(false);
  const handleMouseEnter = () => {
    setSize("medium");
  };
  const handleMouseLeave = () => {
    setSize("small");
  };

  const toggleBurger = () => {
    setOpen(!opened);
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

      <div
        className={cn("overlay-burger-icon", { "as-opened": opened })}
        onClick={toggleBurger}
      />
      <div className={cn("overlay-burger-menu", { "as-opened": opened })}>
        <div className='burger-menu-header'>
          <Hash size={16}/> menu
        </div>
        <h1>collab</h1>
        <h1>studio</h1>
      </div>
    </>
  );
}
