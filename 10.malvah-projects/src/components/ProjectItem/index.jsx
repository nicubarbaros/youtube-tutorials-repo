import React, { useRef, useReducer, useContext, useState } from "react";
import cn from "classnames";
import { Hash } from "react-feather";
import { CursorContext } from "../CustomCursor/CursorManager";
import animate from "./animate";
import Image from "./Image";
import "./style.scss";
import Title from "./Title";

const initialState = {
  rotationPosition: 0,
  scale: 0.8,
  parallaxPos: { x: 0, y: -20 },
  opacity: 0,
  active: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "MOUSE/ENTER":
      return { ...state, active: true };
    case "MOUSE/LEAVE":
      return { ...state, active: false };

    case "MOUSE/COORDINATES": {
      return {
        ...state,
        parallaxPos: action.payload,
      };
    }
    case "CHANGE/ROTATION": {
      return {
        ...state,
        rotationPosition: action.payload,
      };
    }

    case "CHANGE/SCALE": {
      return {
        ...state,
        scale: action.payload,
      };
    }

    case "CHANGE/OPACITY": {
      return {
        ...state,
        opacity: action.payload,
      };
    }
    default:
      throw new Error();
  }
}
const ProjectItem = ({ project, itemIndex }) => {
  const listItem = useRef(null);
  const { setSize } = useContext(CursorContext);

  const [state, dispatch] = useReducer(reducer, initialState);
  const easeMethod = "easeInOutCubic";

  function parallax(event) {
    const speed = -5;
    const x = (window.innerWidth - event.pageX * speed) / 100;
    const y = (window.innerHeight - event.pageY * speed) / 100;

    dispatch({ type: "MOUSE/COORDINATES", payload: { x, y } });
  }

  const handleSetRotation = () => {
    // Random between -15 and 15
    const newRotation =
      Math.random() * 15 * (Math.round(Math.random()) ? 1 : -1);

    animate({
      fromValue: state.rotationPosition,
      toValue: newRotation,
      onUpdate: (value, callback) => {
        dispatch({ type: "CHANGE/ROTATION", payload: value });
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
        dispatch({ type: "CHANGE/SCALE", payload: value });
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
        dispatch({ type: "CHANGE/OPACITY", payload: value });
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
    dispatch({ type: "MOUSE/ENTER" });
  };

  const handleMouseLeave = () => {
    setSize("small");
    handleSetScale(1, 0.8, 800);
    handleOpacity(1, 0, 800);
    dispatch({ type: "MOUSE/LEAVE" });

    dispatch({ type: "MOUSE/COORDINATES", payload: initialState.parallaxPos });
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
        active={state.active}
        scale={state.scale}
        rotationPosition={state.rotationPosition}
        parallaxPos={state.parallaxPos}
        opacity={state.opacity}
      />
      <div className={cn("info-block", { "as-active": state.active })}>
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
