import React, { useRef, useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import ModelPicture from "./ModelPicture";
import useLocomotiveScroll from "../../hooks/useLocomotiveScroll";
import preloadImages from "/src/utils/preloadImages";
import { DataType } from "/src/containers/Home";
import ModelInfo from "./ModelInfo";
import ModelCover from "./ModelCover";
import { defaultEase } from "/src/utils/transition";

import "./style.scss";

type Props = {
  pageContext: DataType;
};

export default function Model({ pageContext }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [locomotiveStart, setLocomotiveStart] = useState(false);

  const [locomotiveScroll] = useLocomotiveScroll({
    ref: containerRef,
    direction: "horizontal",
    smooth: true,
  });

  const { cover, detailImages, title } = pageContext;

  useEffect(() => {
    if (locomotiveStart) {
      locomotiveScroll.current?.update();

      // Preload images, a safer check
      Promise.all([preloadImages(".model-image")]).then(() => {
        locomotiveScroll.current?.update();
      });
    }
  }, [locomotiveStart]);

  const loadLocomotive = () => {
    setLocomotiveStart(true);
  };

  return (
    <div data-scroll-container ref={containerRef}>
      <motion.div
        className="model-container"
        animate={{
          padding: `2vw`,
          transition: { ease: defaultEase, delay: 3, duration: 0.5 },
        }}
        exit={{ opacity: 0 }}
        onAnimationComplete={loadLocomotive}
      >
        <ModelCover src={cover} />

        <ModelInfo title={title} />

        <div className="model-pictures">
          {detailImages.map((src) => (
            <ModelPicture key={src} src={src} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
