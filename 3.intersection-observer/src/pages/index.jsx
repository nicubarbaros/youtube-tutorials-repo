import React from "react";

import "../styles/home.scss";

const HomeLazy = React.lazy(() => import("./Home"));
const Index = () => {
  const isSSR = typeof window === "undefined";

  return (
    <>
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <HomeLazy />
        </React.Suspense>
      )}
    </>
  );
};
export default Index;
