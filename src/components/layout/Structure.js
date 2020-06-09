import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Routes from "../../utils/Routes";
import { BrowserRouter as Router } from "react-router-dom";

const Structure = () => {
  return (
    <>
      <Navigation />
      <main className="z-0 pt-20 pb-8 pl-8 pr-8" data-testid="structure-test">
        <Routes />
      </main>
      <Footer />
      <div />
    </>
  );
};

export default Structure;
