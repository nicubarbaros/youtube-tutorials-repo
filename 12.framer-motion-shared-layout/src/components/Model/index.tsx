import React, { useEffect } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { DataType } from "/src/containers/Home";
import { defaultTransition } from "/src/utils/transition";
import Loader from "../Loader";
import HomeButton from "./HomeButton";

import "./style.scss";

type Props = {
  pageContext: DataType;
};

const variants: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export default function Model({ pageContext }: Props) {
  const { cover, title } = pageContext;
  const controls = useAnimation();

  useEffect(() => {
    setTimeout(() => {
      controls.start({
        opacity: 0,
        transition: { defaultTransition },
      });
    }, 2000);
  }, []);
  return (
    <>
      <Loader loaderControls={controls} title={title} />
      <HomeButton />

      <div className="model-container">
        <div className="image-wrapper">
          <motion.img
            src={cover}
            variants={variants}
            initial={"initial"}
            animate={"animate"}
            transition={{ ...defaultTransition, delay: 2 }}
          />
        </div>
      </div>
    </>
  );
}
