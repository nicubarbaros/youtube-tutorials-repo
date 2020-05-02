import React from "react";
import "./AnimatedTextStyle.scss";

const AnimatedText = ({ text }) => (
  <div className="animated-text-container">
    {[...text].map((temp, index) => (
      <span key={index}>{temp}</span>
    ))}
  </div>
);
export default AnimatedText;
