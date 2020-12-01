import React from "react";
import "../styles/home.scss";
import CustomCursor from "../CustomCursor";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import CursorManager from "../CustomCursor/CursorManager";
const Index = () => {
  return (
    <CursorManager>
      <div className="main-container">
        <CustomCursor />
        <div className="hover-left" />
        <div className="hover-right" />

        <LeftContainer />
        <RightContainer />

        <h1 className="center-text">STORIES</h1>
      </div>
    </CursorManager>
  );
};
export default Index;
