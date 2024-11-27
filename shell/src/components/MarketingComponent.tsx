import { mount } from "marketing/Component";
import React, { useRef, useEffect } from "react";

const MarketingComponent = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  });

  return (
    <div ref={ref}>
      <app-root></app-root>
    </div>
  );
};

export default MarketingComponent;
