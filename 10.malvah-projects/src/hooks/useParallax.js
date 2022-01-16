import React, { useState, useEffect } from "react";

export default function useParallax(
  initialCoordinates = { x: 0, y: 0 },
  speed = -5
) {
  const [coordinates, setCoordinates] = useState(initialCoordinates);
  useEffect(() => {
    function parallax(event) {
      const x = (window.innerWidth + event.pageX * speed) / 100;
      const y = (window.innerHeight + event.pageY * speed) / 100;
      setCoordinates({ x, y });
    }
    document.addEventListener("mousemove", parallax);

    return () => {
      document.removeEventListener("mousemove", parallax);
    };
  }, []);

  return coordinates;
}
