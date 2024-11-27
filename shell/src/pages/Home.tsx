import React, { lazy } from "react";

const MarketingComponent = lazy(() => import("../components/MarketingComponent"));
const ProductsComponent = lazy(() => import("../components/ProductsComponent"));

const Home = () => {
  return (
    <>
      <React.Suspense fallback="Loading...">
        <MarketingComponent />
      </React.Suspense>
      <React.Suspense fallback="Loading...">
        <ProductsComponent />
      </React.Suspense>
    s</>

  );
};

export default Home;
