import { mount } from "auth/Component";
import React, { useRef, useEffect } from "react";

const AuthComponent = ({ onSignIn }: any) => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current, { onSignIn });
  }, []);

  return <div ref={ref} className="auth" />;
};

export default AuthComponent;
