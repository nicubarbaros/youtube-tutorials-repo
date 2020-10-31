import React, { useEffect } from "react";
import "./style.scss";
import Plane from "./Plane";
import Canvas from "./Canvas";
import { CurtainsProvider } from "./store/reduxStore";
import dumbData from "./dumbData";
class CurtainSlider extends React.Component {
  render() {
    return (
      <CurtainsProvider>
        <div id="page-content">
          {dumbData.map(element => (
            <Plane key={element} url={element} />
          ))}
        </div>

        <Canvas />
      </CurtainsProvider>
    );
  }
}
export default CurtainSlider;
