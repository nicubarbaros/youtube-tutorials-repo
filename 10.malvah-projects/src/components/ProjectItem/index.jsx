import React, { useRef } from "react";
import { useContext } from "react";
import { forwardRef } from "react";
import { useState, useEffect } from "react";
import cn from "classnames";
import { Hash, Plus } from "react-feather";
import { CursorContext } from "../CustomCursor/CursorManager";
import animate from "./animate";
import Image from "./Image";
import "./style.scss";
import Title from "./Title";

const ProjectItem = ({ project, itemIndex }) => {
  const listItem = useRef(null);
  const { setSize } = useContext(CursorContext);
  const [rotationPosition, setRotation] = useState(0);
  const [scale, setScale] = useState(0.8);
  const [parallaxPos, setParallaxPos] = useState({ x: 0, y: -20 });
  const [easeMethod, setEaseMethod] = useState("easeInOutCubic");
  const [opacity, setOpacity] = useState(0);

  const [active, setActive] = useState(false);

  function parallax(event) {
    const speed = -5;
    const x = (window.innerWidth - event.pageX * speed) / 100;
    const y = (window.innerHeight - event.pageY * speed) / 100;

    setParallaxPos({ x, y });
  }

  const handleSetRotation = () => {
    // Random between -15 and 15
    const newRotation =
      Math.random() * 15 * (Math.round(Math.random()) ? 1 : -1);

    animate({
      fromValue: rotationPosition,
      toValue: newRotation,
      onUpdate: (value, callback) => {
        setRotation(value);
        callback();
      },
      onComplete: () => {},
      duration: 500,
      easeMethod: easeMethod,
    });
  };

  const handleSetScale = (initialScale, newScale, duration) => {
    animate({
      fromValue: initialScale,
      toValue: newScale,
      onUpdate: (value, callback) => {
        setScale(value);
        callback();
      },
      onComplete: () => {},
      duration: duration,
      easeMethod: easeMethod,
    });
  };

  const handleOpacity = (initialOpacity, newOpacity, duration) => {
    animate({
      fromValue: initialOpacity,
      toValue: newOpacity,
      onUpdate: (value, callback) => {
        setOpacity(value);
        callback();
      },
      onComplete: () => {},
      duration: duration,
      easeMethod: easeMethod,
    });
  };

  const handleMouseEnter = () => {
    listItem.current.addEventListener("mousemove", parallax);

    setSize("regular");
    handleSetRotation();
    handleSetScale(0.8, 1, 500);
    handleOpacity(0, 1, 500);
    setActive(true);
  };

  const handleMouseLeave = () => {
    setSize("small");
    handleSetScale(1, 0.8, 800);
    handleOpacity(1, 0, 800);
    setActive(false);

    setParallaxPos({ x: 0, y: -20 });
    listItem.current.removeEventListener("mousemove", parallax);
  };
  return (
    <li ref={listItem} className="project-item-container">
      <Title
        title={project.title}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
      <Image
        url={project.url}
        active={active}
        scale={scale}
        rotationPosition={rotationPosition}
        parallaxPos={parallaxPos}
        opacity={opacity}
      />
      <div className={cn("info-block", { "as-active": active })}>
        <p className="info-block-header">
          <span>
            <Hash />0{itemIndex}
          </span>
        </p>
        {project.info.map((element) => (
          <p key={element}>
            <span>{element}</span>
          </p>
        ))}
      </div>
    </li>
  );
};

export default ProjectItem;
