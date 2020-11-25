import React from "react";
import "../styles/home.scss";
import CustomCursor from "../CustomCursor";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
const Index = () => {

  return (
    <div className="main-container">
      <CustomCursor />
      <div className="hover-left" />
      <div className="hover-right" />

      <LeftContainer />
      <RightContainer/>

      {/* <h1 className="center-text">효도</h1> */}
      <h1 className="center-text">STORIES</h1>
      
    </div>
  );
};
export default Index;
//https://www.optilingo.com/blog/korean/beautiful-korean-words/
