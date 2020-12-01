import React, { useContext } from "react";
import { CursorContext } from "./CursorManager";
import "./style.scss";

const CustomCursor = () => {
  const secondaryCursor = React.useRef(null);
  const { size } = useContext(CursorContext);

  React.useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;

      const mouseX = clientX;
      const mouseY = clientY;

      secondaryCursor.current.style.transform = `translate3d(${mouseX -
        secondaryCursor.current.clientWidth / 2}px, ${mouseY -
        secondaryCursor.current.clientHeight / 2}px, 0)`;
    });

    return () => {};
  }, []);

  return (
    <div>
      <div className={`secondary-cursor ${size}`} ref={secondaryCursor}></div>
    </div>
  );
};

export default CustomCursor;
