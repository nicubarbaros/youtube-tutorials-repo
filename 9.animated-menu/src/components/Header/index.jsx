import React from "react";
import Menu from "../Menu";
import "./style.scss";

export default function Header() {
  return (
    <div className="header-wrap">
      <p className="brand-description">Digital experience design studio</p>
      <Menu />
    </div>
  );
}
