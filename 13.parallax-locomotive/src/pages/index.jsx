import React from "react";
import Loadable from "react-loadable";
import "../styles/home.scss";

function LoadingComponent(props) {
  return <div/>
}

/**
 * Locomotive has a problem in prod build. 
 * A lazy load of the component fixes it
 */
const HomeLazy = Loadable({
  loader: () => import("../containers/Home"), 
  loading: LoadingComponent,
});

const Index = () => {
  return (
    <>
      <HomeLazy />
    </>
  );
};
export default Index;
