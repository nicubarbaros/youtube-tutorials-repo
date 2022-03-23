import React from "react";
import CursorManager from "../../components/CustomCursor/CursorManager";
import CustomCursor from "/src/components/CustomCursor";

export default function Layout({ children }) {
  return (
    <CursorManager>
      <>
        <CustomCursor />
        {children}
      </>
    </CursorManager>
  );
}
