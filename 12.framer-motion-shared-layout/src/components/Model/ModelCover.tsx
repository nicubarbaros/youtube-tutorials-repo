import React, { useContext } from "react";
import { motion } from "framer-motion";
import { SharedLayoutDataContext } from "../../containers/Layout/manager";
import { defaultTransition } from "/src/utils/transition";

type Props = {
  src: string;
};
export default function ModelCover({ src }: Props) {
  const { contextValue } = useContext(SharedLayoutDataContext);
  const { width, height, x, y } = contextValue;

  return (
    <motion.div
      className="model-cover"
      initial={{
        width: width,
        height: height,
        transform: `translate(${x}px, ${y}px)`,
      }}
      animate={{
        transform: `translate(0px, 0px)`,
        width: "45vw",
        height: "100%",
      }}
      transition={defaultTransition}
    >
      <motion.img
        src={src}
        initial={{
          scale: 1,
        }}
        animate={{
          scale: 1.1,
        }}
        transition={{ ...defaultTransition, delay: 1 }}
      />
    </motion.div>
  );
}
