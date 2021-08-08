import React, { createContext, useState } from "react";

export const MenuContext = createContext({
  open: false,
  setOpen: () => {},
});
export default function MenuManager(props) {
  const [open, setOpen] = useState(false);

  return (
    <MenuContext.Provider value={{ open, setOpen }}>
      {props.children}
    </MenuContext.Provider>
  );
}
