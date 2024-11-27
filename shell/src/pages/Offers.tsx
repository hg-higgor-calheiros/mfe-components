import React, { lazy } from "react";

const MarketingComponent = lazy(() => import("../components/MarketingComponent"));

const Offers = () => {
  return (
      <React.Suspense fallback="Loading...">
        <MarketingComponent />
      </React.Suspense>

  );
};

export default Offers;
