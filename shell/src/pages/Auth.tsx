import Layout from "antd/es/layout/layout";
import React, { lazy } from "react";

const AuthComponent = lazy(() => import("../components/AuthComponent"));

interface AuthProps {
  onSignIn: any
}

const Auth = ({ onSignIn }: AuthProps) => {
  return (
    <Layout style={{ background: "white", width: 1440, margin: "auto", minHeight: '80vh' }}>
      <React.Suspense fallback="Loading...">
        <AuthComponent onSignIn={onSignIn}/>
      </React.Suspense>
    </Layout>
  );
};

export default Auth;
