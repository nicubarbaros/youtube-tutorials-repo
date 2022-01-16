import React, { useContext, useEffect, useRef, useState } from "react";
import { navigate } from "gatsby";
import { motion } from "framer-motion";
import { SharedLayoutDataContext } from "../../containers/Layout/manager";
import { CursorContext } from "../CustomCursor/CursorManager";
import { DataType } from "/src/containers/Home";
import useWindowSize from "/src/hooks/useWindowSize";
import { defaultTransition } from "/src/utils/transition";

import "./style.scss";

type Props = {
  element: DataType;
  index: number;
};

const ImageLink = ({ index, element }: Props) => {
  const { slug, cover, color, title } = element;
  const { setProjectTitle } = useContext(CursorContext);
  const { setValue, setCurrent, current } = useContext(SharedLayoutDataContext);
  const windowSizes = useWindowSize();
  const ref = useRef<HTMLDivElement>(null);

  const [params, setParams] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const xPos = () => {
      if (!ref.current) return 0;

      const rect = ref.current.getBoundingClientRect();
      const x = windowSizes.width / 2 - rect.left - rect.width / 2;

      return x;
    };

    const yPos = () => {
      if (!ref.current) return 0;

      const rect = ref.current.getBoundingClientRect();
      const y = windowSizes.height / 2 - rect.top - rect.height / 2;

      return y;
    };

    // THESE VALUES ARE DIFFERENT FROM ONCLICK BECAUSE THEY ARE IN A GRID
    setParams({
      x: xPos(),
      y: yPos(),
    });
  }, []);

  const handleOnClick = () => {
    if (!ref.current) return;
    setCurrent(slug);
    const rect = ref.current.getBoundingClientRect();

    // Set the params for the image that will be in the Model component to place the image in the center
    setValue({
      x: windowSizes.width / 2 - rect.width / 2,
      y: windowSizes.height / 2 - rect.height / 2,
      width: rect.width,
      height: rect.height,
    });

    navigate(`/${slug}`);
  };

  const transitionDelay = index / 10 + 0.5;

  return (
    <motion.div
      ref={ref}
      className="content__slide-item"
      onClick={handleOnClick}
      exit={{
        x: params.x,
        y: params.y,
        zIndex: current === slug ? 100 : 0,
        transition: { ...defaultTransition, delay: transitionDelay },
      }}
      onMouseEnter={() => setProjectTitle(title)}
      onMouseLeave={() => setProjectTitle("")}
    >
      <motion.div
        className="image-link-component"
        initial={{
          opacity: 0,
          scale: 0,
          backgroundColor: color,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { ...defaultTransition, delay: transitionDelay },
        }}
        exit={{
          opacity: current === slug ? 1 : 0,
          transition: { ...defaultTransition, delay: 3 },
        }}
      >
        <motion.img
          initial={{ filter: "grayscale(1)" }}
          whileHover={{
            filter: `grayscale(0)`,
            scale: 1.05,
            transition: {
              ...defaultTransition,
              ease: "easeInOut",
              duration: 0.5,
            },
          }}
          exit={{
            opacity: current === slug ? 1 : 0,
            transition: defaultTransition,
            filter: current === slug ? `grayscale(0)` : `grayscale(1)`,
          }}
          src={cover}
        />
      </motion.div>
    </motion.div>
  );
};
export default ImageLink;
