import React, { useContext, useEffect } from "react";
import { CursorContext } from "./CursorManager";
import "./style.scss";

const CustomCursor = ({ speed = 0.1 }) => {
  const { projectTitle } = useContext(CursorContext);
  const titleRef = React.useRef<HTMLDivElement>(null);
  const mainCursor = React.useRef<HTMLDivElement>(null);
  const positionRef = React.useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      if (positionRef.current && mainCursor.current && titleRef.current) {
        const { clientX, clientY } = event;

        const mouseX = clientX;
        const mouseY = clientY;

        positionRef.current.mouseX = mouseX - titleRef.current.clientWidth / 2;
        positionRef.current.mouseY = mouseY - titleRef.current.clientHeight / 2;

        mainCursor.current.style.transform = `translate3d(${mouseX -
          mainCursor.current.clientWidth / 2}px, ${mouseY -
          mainCursor.current.clientHeight / 2}px, 0)`;
      }
    });

    return () => {};
  }, []);

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * speed;
        positionRef.current.distanceY = (mouseY - destinationY) * speed;
        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }
      if (titleRef && titleRef.current)
        titleRef.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
    };
    followMouse();
  }, [speed]);

  return (
    <div className="cursor-wrapper">
      <div className="secondary-cursor" ref={mainCursor}></div>
      <div className="project-title" ref={titleRef}>
        {projectTitle}
      </div>
    </div>
  );
};

export default CustomCursor;
