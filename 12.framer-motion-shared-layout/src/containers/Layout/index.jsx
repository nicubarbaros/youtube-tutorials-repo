import React from "react";
import { AnimatePresence } from "framer-motion";
import CustomCursor from "../../components/CustomCursor";
import CursorManager from "../../components/CustomCursor/CursorManager";

export default function Layout({ children }) {
  return (
    <CursorManager>
      <CustomCursor />
      <AnimatePresence initial={true}>{children}</AnimatePresence>
    </CursorManager>
  );
}
