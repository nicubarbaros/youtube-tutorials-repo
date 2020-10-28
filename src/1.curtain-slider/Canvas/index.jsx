import React, { useContext, useRef, useLayoutEffect } from "react";
import { CurtainsContext } from "../store/curtainStore";

import "./style.scss";

const Canvas = () => {
  // init our curtains instance
  const { state, dispatch } = useContext(CurtainsContext);
  const container = useRef();

  useLayoutEffect(() => {
    const curtains = state.curtains;

    if (container.current && !curtains.container) {
      // set our curtains instance container once
      curtains.setContainer(container.current);

      curtains
        .onError(() => {
          dispatch({
            type: "SET_CURTAINS_ERROR"
          });
        })
        .onContextLost(() => {
          curtains.restoreContext();
        });

      dispatch({
        type: "SET_CURTAINS_CONTAINER",
        container: curtains.container
      });

      // dispose curtains if we're unmounting the component (shouldn't ever happen)
      return () => {
        curtains.dispose();
      };
    }
  }, [container, state.container, state.curtains, dispatch]);

  return <div className="Canvas" ref={container} />;
};

export default Canvas;
