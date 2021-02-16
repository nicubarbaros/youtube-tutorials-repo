import React from "react";
import Loadable from "@loadable/component";
import "../styles/home.scss";

const HomeLazy = Loadable(() => import("./Home"));

const Index = () => {
  return (
    <>
      <HomeLazy />
    </>
  );
};
export default Index;
