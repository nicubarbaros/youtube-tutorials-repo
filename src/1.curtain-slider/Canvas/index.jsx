import React, { useContext, useRef, useLayoutEffect } from "react";
import { CurtainsContext } from "../store/reduxStore";
import "./style.scss";

const Canvas = () => {
  // init our curtains instance
  const { state, dispatch } = useContext(CurtainsContext);
  const { scrollEffect } = state;
  const container = useRef();

  const someRef = useRef({ scrollEffect: 0 });

  useLayoutEffect(() => {
    const { curtains, scrollEffect, planes } = state;
    if (container.current && !curtains.container) {
      // set our curtains instance container once
      curtains.setContainer(container.current);

      // dispatch({
      //   type: "SET_SMOOTH_SCROLL",
      // });
      // console.log("planes", planes);
      curtains
        .onError(() => {
          dispatch({
            type: "SET_CURTAINS_ERROR",
          });
        })
        .onContextLost(() => {
          curtains.restoreContext();
        })
        .onRender(() => {
          const newScrollEffect = curtains.lerp(
            someRef.current.scrollEffect,
            0,
            0.075
          );
          someRef.current.scrollEffect = newScrollEffect;

          dispatch({
            type: "SET_SCROLL_EFFECT",
            payload: newScrollEffect,
          });
        })
        .onScroll(() => {
          // get scroll deltas to apply the effect on scroll
          const delta = curtains.getScrollDeltas();

          // invert value for the effect
          delta.y = -delta.y;

          // threshold
          if (delta.y > 60) {
            delta.y = 60;
          } else if (delta.y < -60) {
            delta.y = -60;
          }

          console.log(
            "scroll-efect",
            someRef.current.scrollEffect,
            delta.y,
            scrollEffect
          );

          if (Math.abs(delta.y) > Math.abs(someRef.current.scrollEffect)) {
            const newScrollEffect = curtains.lerp(
              someRef.current.scrollEffect,
              delta.y * 1.5,
              0.5
            );
            console.log(newScrollEffect);
            someRef.current.scrollEffect = newScrollEffect;
            dispatch({
              type: "SET_SCROLL_EFFECT",
              payload: newScrollEffect,
            });
          }
        });

      dispatch({
        type: "SET_CURTAINS_CONTAINER",
        payload: curtains.container,
      });

      // dispose curtains if we're unmounting the component (shouldn't ever happen)
      return () => {
        curtains.dispose();
      };
    }
  }, [container, state, dispatch]);

  return <div className="Canvas" ref={container} />;
};

export default Canvas;
