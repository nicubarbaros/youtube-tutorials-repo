import React from "react";
import { AnimatePresence } from "framer-motion";
import SharedLayoutData from "./manager";
import CustomCursor from "../../components/CustomCursor";
import CursorManager from "../../components/CustomCursor/CursorManager";

export default function Layout({ children }) {
  return (
    <CursorManager>
      {/* <CustomCursor /> */}
      <SharedLayoutData>
        <AnimatePresence initial={true}>{children}</AnimatePresence>
      </SharedLayoutData>
    </CursorManager>
  );
}
