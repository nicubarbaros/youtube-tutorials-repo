import React from "react";
import { Curtains } from "curtainsjs";
import LocomotiveScroll from "locomotive-scroll";

const initialState = {
  curtains: new Curtains({
    pixelRatio: Math.min(1.5, window.devicePixelRatio),
    // watchScroll: false,
  }),
  smoothScroll: null,
  isActive: true,
  container: null,
  scrollEffect: 0,
  planes: [],
};

const CurtainsContext = React.createContext(initialState);
const { Provider } = CurtainsContext;

const CurtainsProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer((state, action) => {
    switch (action.type) {
      case "SET_CURTAINS_CONTAINER":
        return {
          ...state,
          container: action.payload,
        };
      case "SET_CURTAINS_ERROR":
        return {
          ...state,
          isActive: false,
        };

      case "SET_SMOOTH_SCROLL": {
        const smoothScroll = new LocomotiveScroll({
          el: document.getElementById("page-content"),
          smooth: true,
          inertia: 0.5,
          passive: true,
        });

        function updateScroll(xOffset, yOffset) {
          // update our scroll manager values
          state.curtains.updateScrollValues(xOffset, yOffset);
        }

        // custom scroll event
        // we'll render only while lerping the scroll

        console.log(state.curtains);
        state.curtains.disableDrawing();
        smoothScroll.on("scroll", obj => {
          console.log(obj);
          updateScroll(obj.scroll.x, obj.scroll.y);

          // render scene
          state.curtains.needRender();
        });

        return {
          ...state,
          smoothScroll,
        };
      }
      case "SET_SCROLL_EFFECT": {
        return {
          ...state,
          scrollEffect: action.payload,
        };
      }
      case "ADD_PLANE": {
        return {
          ...state,
          planes: [...state.planes, action.payload],
        };
      }
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { CurtainsContext, CurtainsProvider };
