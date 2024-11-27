import React, { lazy } from "react";

const ProductsComponent = lazy(() => import("../components/ProductsComponent"));

const Products = () => {
  return (
      <React.Suspense fallback="Loading...">
        <ProductsComponent />
      </React.Suspense>

  );
};

export default Products;
