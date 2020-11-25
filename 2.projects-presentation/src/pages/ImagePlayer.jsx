import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
export default function ImagePlayer({ src, alt }) {
  const [stateSrc, setStateSrc] = useState(src);
  const [fade, setFade] = useState("fade-out");
  useEffect(() => {
    setFade("fade-out");

    setTimeout(()=>{
      setStateSrc(src);
    }, 300)
    setTimeout(() => {
      setFade("fade-in");
    }, 500);
  }, src);

  useEffect(() => {
    setTimeout(() => {
      setFade("fade-in");
    }, 1000);
  }, []);

  return (
    <div
      className={`image-player fade ${fade}`}
      style={{ backgroundImage: `url(${stateSrc})` }}
    />
  );
}
