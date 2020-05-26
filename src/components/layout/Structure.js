import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Routes from "../../utils/Routes";

const Structure = () => {
  return (
    <>
      <Navigation />
      <main className="pt-20 pr-8 pb-8 pl-8 z-0">
        <Routes />
      </main>
      <Footer />
    </>
  );
};

export default Structure;
