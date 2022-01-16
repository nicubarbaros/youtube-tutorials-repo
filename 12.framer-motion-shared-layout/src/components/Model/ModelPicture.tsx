import React from "react";
import { motion, Variants } from "framer-motion";

const transition = { duration: 2, ease: [0.43, 0.13, 0.23, 0.96] };

const modelVariant:Variants = {
  initial: {
    opacity: 0,
    transition,
    position: "absolute",
  },
  animate: {
    opacity: 1,
    position: "initial",
    transition: { ...transition, delay: 3.5, duration: 1 },
  },
  exit: { opacity: 0, transition },
};

type Props = {
  src: string;
};
export default function ModelPicture({ src }: Props) {
  return (
    <motion.img
      className="model-picture"
      src={src}
      variants={modelVariant}
      initial="initial"
      animate="animate"
      exit="exit"
    />
  );
}
