import React, { lazy, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { Layout } from "antd";
import Products from "./pages/Products";
import Offers from "./pages/Offers";

const Header = lazy(() => import("./components/HeaderComponent"));

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const onSignInCallback = () => {
    setIsSignedIn(true)
  }

  return (
    <BrowserRouter>
      <Layout>
        <Header
          onSignOut={() => setIsSignedIn(false)}
          isSignedIn={isSignedIn}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/offers" element={<Offers />} />
          
          <Route path="/auth/*" element={<Auth onSignIn={onSignInCallback}/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
