import React, { createContext, useState } from "react";

export type CursorContextType = {
  projectTitle: string;
  setProjectTitle: (value: string) => void;
};

export const CursorContext = createContext<CursorContextType>({
  projectTitle: "",
  setProjectTitle: () => {},
});

type Props = {
  children: JSX.Element;
};
export default function CursorManager({ children }: Props) {
  const [projectTitle, setProjectTitle] = useState<string>("");

  const handleSetProjectTitle = (value: string) => setProjectTitle(value);
  return (
    <CursorContext.Provider
      value={{ projectTitle, setProjectTitle: handleSetProjectTitle }}
    >
      {children}
    </CursorContext.Provider>
  );
}
