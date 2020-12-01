import React, { useEffect, useState } from "react";

export default function VideoPlayer({ src }) {
  const [stateSrc, setStateSrc] = useState(src);
  const [fade, setFade] = useState("fade-out");
  
  
  useEffect(() => {
    setFade("fade-out");

    setTimeout(()=>{
      setStateSrc(src);
    }, 500)
    setTimeout(() => {
      setFade("fade-in");
    }, 1000);
  }, [src]);

  useEffect(() => {
    setTimeout(() => {
      setFade("fade-in");
    }, 1000);
  }, []);

  return (
    <iframe
    title={src}
      className={`resp-iframe fade ${fade}`}
      src={stateSrc}
      width="640"
      height="360"
      frameborder="0"
      webkitallowfullscreen
      mozallowfullscreen
      allowfullscreen
      allow="autoplay; fullscreen"
      controls="0"
    ></iframe>
  );
}
