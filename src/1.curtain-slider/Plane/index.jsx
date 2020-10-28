import React, { useContext, useRef, useLayoutEffect } from "react";
import { Plane } from "curtainsjs";

import "./style.scss";
import { CurtainsContext } from "../store/curtainStore";

// vertex and fragment shaders
const vs = `
  precision mediump float;
    
  attribute vec3 aVertexPosition;
  attribute vec2 aTextureCoord;

  uniform mat4 uMVMatrix;
  uniform mat4 uPMatrix;

  uniform mat4 planeTextureMatrix;

  varying vec3 vVertexPosition;
  varying vec2 vTextureCoord;

  void main() {
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);

    // varyings
    vVertexPosition = aVertexPosition;
    vTextureCoord = (planeTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
  }
`;

const fs = `
  precision mediump float;

  varying vec3 vVertexPosition;
  varying vec2 vTextureCoord;

  uniform sampler2D planeTexture;

  uniform float uTime;

  void main() {
    // adding a little ripple effect spreading from the center
    vec2 textureCoord = vTextureCoord;
    vec2 dir = textureCoord - vec2(0.5);
    float dist = distance(textureCoord, vec2(0.5));
    vec2 offset = dir * (sin(dist * 40.0 - uTime * 0.1) + 0.5) * 0.035;
    textureCoord = textureCoord + offset;

    gl_FragColor = texture2D(planeTexture, textureCoord);
  }
`;


const WebPlane = ({ url }) => {
  const { state } = useContext(CurtainsContext);
  const planeEl = useRef();

  useLayoutEffect(() => {
    const curtains = state.curtains;

    // curtains container has been set
    if (state.container) {
      const planeParams = {
        vertexShader: vs,
        fragmentShader: fs,
        uniforms: {
          time: {
            name: "uTime",
            type: "1f",
            value: 0,
          },
        },
      };

      const plane = new Plane(curtains, planeEl.current, planeParams);

      plane.onRender(() => {
        plane.uniforms.time.value++;
      });

      // remove plane if we're unmounting the component
      return () => {
        plane.remove();
      };
    }
  }, [state.container, state.curtains]);

  return (
    <div className="Plane" ref={planeEl}>
      <img
        src={url}
        alt=""
        crossOrigin="anonymous"
        data-sampler="planeTexture"
      />
    </div>
  );
};

export default WebPlane;
