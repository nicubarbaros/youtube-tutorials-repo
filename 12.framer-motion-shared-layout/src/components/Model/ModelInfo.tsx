import React from "react";
import { motion } from "framer-motion";
import { defaultEase } from "/src/utils/transition";
type Props = {
  title: string;
};
export default function ModelInfo({ title }: Props) {
  return (
    <motion.div
      className="model-info"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: { ease:defaultEase, delay: 3.5, duration: 1 },
      }}
      exit={{
        opacity: 0,
      }}
    >
      <h1 data-scroll data-scroll-speed={-1} className="model-title">
        {title}
      </h1>
    </motion.div>
  );
}
