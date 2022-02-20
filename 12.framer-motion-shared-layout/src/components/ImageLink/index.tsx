import React, { useContext, useEffect, useRef, useState } from "react";
import { navigate } from "gatsby";
import { motion } from "framer-motion";
import { DataType } from "/src/containers/Home";
import { defaultTransition } from "/src/utils/transition";

import "./style.scss";

type Props = {
  element: DataType;
  index: number;
};

const ImageLink = ({ index, element }: Props) => {
  const { cover, slug } = element;

  const navigateTo = () => {
    navigate(slug);
  };
  return (
    <motion.img
      className="grid-item-media"
      onClick={navigateTo}
      transition={defaultTransition}
      layoutId={`container-${index}`}
      src={element.cover}
    />
  );
};
export default ImageLink;
