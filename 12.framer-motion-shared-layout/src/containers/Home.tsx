import {
  AnimateSharedLayout,
  LayoutGroup,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { AnimationDefinition } from "framer-motion/types/render/utils/animation";
import React, { useContext, useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import ImageLink from "../components/ImageLink";
import jsonData from "../data.json";
import { defaultEase, defaultTransition } from "../utils/transition";
import { SharedLayoutDataContext } from "./Layout/manager";

export type DataType = {
  cover: string;
  title: string;
  color: string;
  slug: string;
  detailImages: string[];
};
export default function Home() {
  const mapData: DataType[] = Array.from(jsonData);
  const { setBackgroundColor, backgroundColor } = useContext(
    SharedLayoutDataContext
  );
  const [active, setActive] = useState(true);
  const gridRef = useRef(null);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // const components = mapData.map((element, index) => (
  //   <ImageLink key={element.slug} element={element} index={index} />
  // ));

  useEffect(() => {
    setTimeout(() => {
      setActive(false);
    }, 2000);
    return () => {};
  }, []);
  // useEffect(() => {
  //   if (active) {
  //     if (gridRef.current) {
  //       gridRef.current.addEventListener("mousemove", parallax);
  //     } else {
  //       if (gridRef.current) {
  //         gridRef.current.removeEventLsitener("mousemove", parallax);
  //       }
  //     }
  //   }

  //   return () => {};
  // }, [active]);

  function parallax(event) {
    const speed = -5;
    const rect = gridRef.current.getBoundingClientRect();
    console.log(rect.left);
    console.log(gridRef.current.clientWidth, event.pageX, event.clientX);
    // const t1 = ((event.pageX - window.innerWidth) * speed) / 100;
    // const t2 = ((event.pageY - window.innerHeight) * speed) / 100;
    const t1 = (window.innerWidth - event.pageX * speed) / 90;
    const t2 = (window.innerHeight - event.pageY * speed) / 90;
    // const t1 = (gridRef.current.clientWidth - event.pageX * speed) / 100;
    // const t2 = (gridRef.current.clientHeight - event.pageY * speed) / 100;
    // const t1 = (event.clientX - rect.left * speed) / 10;
    // const t2 = (event.clientY - rect.top * speed) / 10;
    // x.set(t1);
    // y.set(t2);
    x.set(t1);
    y.set(t2);
    // x.set(event.clientX - rect.left);
    // y.set(event.clientY - rect.top);
  }

  const array = [...mapData, ...mapData];

  const c = useSpring(x, { stiffness: 400, damping: 90 });
  const c2 = useSpring(y, { stiffness: 400, damping: 90 });

  const onAnimationComplete = (
    event: AnimationDefinition,
    element: DataType
  ) => {
    if (event.transition) {
      console.log("c");
      setBackgroundColor(element.color);
    }
    console.log(event, element);
  };
  return (
    <>
      <Header toggleView={(value) => setActive(value)} view={active} />
      <div className="content" style={{ backgroundColor }}>
        {active && (
          <div className="grid-container">
            <motion.div
              // onMouseMove={parallax}
              ref={gridRef}
              className="grid-elements"
              transition={defaultTransition}
              // style={{
              //   x: c,
              //   y: c2,
              //   // x,
              //   // y,
              //   // transform: `translate3d(${coordinates.x}px, ${coordinates.y}px, 0px)`,
              // }}
            >
              {array.map((element, index) => (
                <motion.div
                  className="element"
                  initial={{
                    y: 300 * (index % 5),
                  }}
                  transition={{ duration: 1 }}
                  animate={{
                    y: 0,
                  }}
                >
                  <motion.div
                    className="thumbnail-wrapper"
                    whileHover={{
                      transition: { ease: defaultEase, delay: 0.3 },
                      scale: 1.15,
                    }}
                    initial={{
                      scale: 1.15,
                    }}
                    animate={{
                      scale: 1,
                      transition: { delay: 1, duration: 1 },
                    }}
                    // onAnimationComplete={(event) => {
                    //   onAnimationComplete(event, element);
                    // }}
                  >
                    <motion.img
                      transition={{
                        ...defaultTransition,
                      }}
                      layoutId={`container-${index}`}
                      src={element.cover}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
        {!active && (
          <div className="list-elements">
            {array.map((element, index) => (
              <div className="element">
                <motion.img
                  transition={defaultTransition}
                  layoutId={`container-${index}`}
                  src={element.cover}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
