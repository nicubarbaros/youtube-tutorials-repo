import React from "react";
import "./style.scss";

export default function Header() {
  return (
    <ul className="header">
      <li>home</li>
      <li className="active hide-xs">work</li>
      <li className="hide-xs">travel</li>
      <li>menu</li>
    </ul>
  );
}
