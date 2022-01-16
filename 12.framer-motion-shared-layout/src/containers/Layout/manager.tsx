import React, { createContext, useState } from "react";

export type SharedLayoutDataType = {
  setBackgroundColor: (color: string) => void;
  backgroundColor: string;
};

export const SharedLayoutDataContext = createContext<SharedLayoutDataType>({});

type Props = {
  children: JSX.Element;
};
export default function SharedLayoutData({ children }: Props) {
  const [backgroundColor, setBackgroundColor] = useState("#fff");
  return (
    <SharedLayoutDataContext.Provider
      value={{
        backgroundColor,
        setBackgroundColor,
      }}
    >
      {children}
    </SharedLayoutDataContext.Provider>
  );
}
