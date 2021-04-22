import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

import "../styles/home.scss";
import CustomCursor from "../CustomCursor";
import Gallery from "../components/Gallery";
import CursorManager from "../CustomCursor/CursorManager";
const Home = () => {
  const ref = useRef(null);

  if (typeof window === "undefined" || !window.document) {
    return null;
  }
  return (
    <>
      <CursorManager>
        <CustomCursor />
        <div className="main-container" ref={ref}>
          <Gallery />
        </div>
      </CursorManager>
    </>
  );
};
export default Home;
