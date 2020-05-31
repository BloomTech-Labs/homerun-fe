import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Routes from "../../utils/Routes";

const Structure = () => {
  return (
    <>
      <Navigation />
      <main className="z-0 pt-20 pb-8 pl-8 pr-8 desktop:pb-3">
        <Routes />
      </main>
      <Footer />
    </>
  );
};

export default Structure;
