import React from "react";
import MenuButton from "./MenuButton";
import MenuContent from "./MenuContent";
import MenuManager from "./MenuManager";

export default function Menu() {
  return (
    <div className="menu-wrapper">
      <MenuManager>
        <MenuButton />
        <MenuContent />
      </MenuManager>
    </div>
  );
}
