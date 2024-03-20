import React from "react";
import { Footer, Header } from ".";
import { Outlet } from "react-router-dom";

const LayoutWebsite = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutWebsite;
