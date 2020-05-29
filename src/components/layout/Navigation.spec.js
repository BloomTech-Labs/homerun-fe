import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Navigation from "./Navigation";
import { BrowserRouter as Router } from "react-router-dom";

afterAll(cleanup);

describe("isOpen state testing", () => {
  it("should contain class hidden by default", () => {
    const { getByTestId } = render(
      <Router>
        <Navigation />
      </Router>
    );

    expect(getByTestId("isOpen").classList.contains("hidden")).toBe(true);
  });
  it("should contain class block after button press", () => {
    const { getByTestId } = render(
      <Router>
        <Navigation />
      </Router>
    );

    fireEvent.click(getByTestId("nav-button"));

    expect(getByTestId("isOpen").classList.contains("hidden")).toBe(false);
  });
});

describe("Routes should point to correct route", () => {
  it("should point to /", () => {
    const { getByTestId } = render(
      <Router>
        <Navigation />
      </Router>
    );
    expect(getByTestId("home-link").getAttribute("href")).toBe("/");
  });
  it("should point to /about", () => {
    const { getByTestId } = render(
      <Router>
        <Navigation />
      </Router>
    );
    expect(getByTestId("about-link").getAttribute("href")).toBe("/about");
  });
  it("should point to /contact", () => {
    const { getByTestId } = render(
      <Router>
        <Navigation />
      </Router>
    );
    expect(getByTestId("contact-link").getAttribute("href")).toBe("/contact");
  });
  it("should point to /signin", () => {
    const { getByTestId } = render(
      <Router>
        <Navigation />
      </Router>
    );
    expect(getByTestId("signin-link").getAttribute("href")).toBe("/signin");
  });
});
