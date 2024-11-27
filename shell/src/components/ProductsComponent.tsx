import { mount } from "products/Component";
import React, { useRef, useEffect } from "react";

const ProductsComponent = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} className="product-list" />;
};

export default ProductsComponent;
